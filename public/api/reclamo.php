<?php
// Libro de Reclamaciones virtual: recibe el formulario, asigna número de hoja,
// guarda el registro en /api/_reclamos/ y envía copia por correo al proveedor y al consumidor.

declare(strict_types=1);

// ---------- Configuración ----------
const CORREO_PROVEEDOR = 'seguridadportugal@gmail.com';
// Debe ser una cuenta del propio dominio para que el hosting no rechace el envío.
const CORREO_REMITENTE = 'no-responder@contraincendioportugal.com';
const RAZON_SOCIAL = 'Portugal Seguridad Industrial Minera E.I.R.L.';
const RUC = '20600361172';
const DOMICILIO = 'Urb. 12 de Octubre H-18, Cerro Colorado, Arequipa';
const DIR_DATOS = __DIR__ . '/_reclamos';
const PAGINA = '/libro-de-reclamaciones/';
// -----------------------------------

date_default_timezone_set('America/Lima');
mb_internal_encoding('UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$quiereJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function responder(int $codigo, array $datos): void
{
    global $quiereJson;
    http_response_code($codigo);
    if ($quiereJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($datos, JSON_UNESCAPED_UNICODE);
        exit;
    }
    // Sin JavaScript: página mínima con el resultado.
    header('Content-Type: text/html; charset=utf-8');
    $titulo = $datos['ok'] ? 'Reclamación registrada' : 'No se pudo registrar';
    $mensaje = htmlspecialchars($datos['mensaje'], ENT_QUOTES, 'UTF-8');
    echo "<!doctype html><html lang=\"es-PE\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
        . "<title>{$titulo}</title><body style=\"font-family:system-ui,sans-serif;max-width:640px;margin:48px auto;padding:0 20px;line-height:1.6\">"
        . "<h1>{$titulo}</h1><p>{$mensaje}</p><p><a href=\"" . PAGINA . "\">Volver al Libro de Reclamaciones</a></p></body></html>";
    exit;
}

function campo(string $nombre, int $max): string
{
    $v = $_POST[$nombre] ?? '';
    if (!is_string($v)) {
        return '';
    }
    $v = trim(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '');
    return mb_substr($v, 0, $max);
}

function unaLinea(string $v): string
{
    return trim(preg_replace('/\s+/u', ' ', $v) ?? '');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    responder(405, ['ok' => false, 'mensaje' => 'Método no permitido.']);
}

// Trampa para bots: campo oculto que una persona nunca llena.
if (campo('sitio_web', 200) !== '') {
    responder(200, ['ok' => true, 'numero' => '', 'mensaje' => 'Reclamación registrada.']);
}

$d = [
    'tipo_doc' => unaLinea(campo('tipo_doc', 20)),
    'num_doc' => unaLinea(campo('num_doc', 20)),
    'nombres' => unaLinea(campo('nombres', 120)),
    'apellidos' => unaLinea(campo('apellidos', 120)),
    'domicilio' => unaLinea(campo('domicilio', 250)),
    'telefono' => unaLinea(campo('telefono', 30)),
    'email' => unaLinea(campo('email', 150)),
    'apoderado' => unaLinea(campo('apoderado', 150)),
    'bien' => unaLinea(campo('bien', 20)),
    'monto' => unaLinea(campo('monto', 30)),
    'descripcion' => campo('descripcion', 1500),
    'tipo' => unaLinea(campo('tipo', 20)),
    'detalle' => campo('detalle', 4000),
    'pedido' => campo('pedido', 2000),
];
$menor = isset($_POST['menor']);
$acepta = isset($_POST['acepta']);

$errores = [];
if (!in_array($d['tipo_doc'], ['DNI', 'CE', 'Pasaporte', 'RUC'], true)) $errores[] = 'Selecciona el tipo de documento.';
if (!preg_match('/^[A-Za-z0-9-]{6,20}$/', $d['num_doc'])) $errores[] = 'Revisa el número de documento.';
if (mb_strlen($d['nombres']) < 2) $errores[] = 'Escribe tus nombres.';
if (mb_strlen($d['apellidos']) < 2) $errores[] = 'Escribe tus apellidos.';
if (mb_strlen($d['domicilio']) < 5) $errores[] = 'Escribe tu domicilio.';
if (!preg_match('/^[0-9 +()-]{6,30}$/', $d['telefono'])) $errores[] = 'Revisa el teléfono.';
if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL)) $errores[] = 'Revisa el correo electrónico.';
if ($menor && mb_strlen($d['apoderado']) < 5) $errores[] = 'Indica el nombre del padre, madre o apoderado.';
if (!in_array($d['bien'], ['Producto', 'Servicio'], true)) $errores[] = 'Indica si se trata de un producto o un servicio.';
if ($d['monto'] !== '' && !preg_match('/^[0-9]{1,9}([.,][0-9]{1,2})?$/', $d['monto'])) $errores[] = 'Revisa el monto reclamado.';
if (mb_strlen($d['descripcion']) < 5) $errores[] = 'Describe el producto o servicio.';
if (!in_array($d['tipo'], ['Reclamo', 'Queja'], true)) $errores[] = 'Indica si es un reclamo o una queja.';
if (mb_strlen($d['detalle']) < 10) $errores[] = 'Detalla tu reclamo o queja.';
if (mb_strlen($d['pedido']) < 5) $errores[] = 'Indica tu pedido.';
if (!$acepta) $errores[] = 'Debes aceptar la política de privacidad.';

if ($errores) {
    responder(422, ['ok' => false, 'mensaje' => implode(' ', $errores), 'errores' => $errores]);
}

// ---------- Número de hoja correlativo por año ----------
$anio = date('Y');
if (!is_dir(DIR_DATOS . '/' . $anio) && !mkdir(DIR_DATOS . '/' . $anio, 0750, true) && !is_dir(DIR_DATOS . '/' . $anio)) {
    responder(500, ['ok' => false, 'mensaje' => 'No se pudo registrar la reclamación. Comunícate por teléfono o WhatsApp.']);
}
$archivoContador = DIR_DATOS . '/contador-' . $anio . '.txt';
$fh = fopen($archivoContador, 'c+');
if (!$fh || !flock($fh, LOCK_EX)) {
    responder(500, ['ok' => false, 'mensaje' => 'No se pudo registrar la reclamación. Comunícate por teléfono o WhatsApp.']);
}
$n = (int) stream_get_contents($fh) + 1;
ftruncate($fh, 0);
rewind($fh);
fwrite($fh, (string) $n);
fflush($fh);
flock($fh, LOCK_UN);
fclose($fh);
$numero = sprintf('%s-%06d', $anio, $n);
$fecha = date('d/m/Y H:i');

// ---------- Registro en el servidor ----------
$registro = ['numero' => $numero, 'fecha' => date('c'), 'ip' => $_SERVER['REMOTE_ADDR'] ?? '', 'menor' => $menor] + $d;
$guardado = file_put_contents(
    DIR_DATOS . '/' . $anio . '/' . $numero . '.json',
    json_encode($registro, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT),
    LOCK_EX
) !== false;

// ---------- Hoja de reclamación (texto) ----------
$monto = $d['monto'] !== '' ? 'S/ ' . $d['monto'] : 'No indicado';
$hoja = "LIBRO DE RECLAMACIONES - HOJA DE RECLAMACIÓN N.º {$numero}\n"
    . "Fecha: {$fecha}\n\n"
    . 'Proveedor: ' . RAZON_SOCIAL . "\nRUC: " . RUC . "\nDomicilio: " . DOMICILIO . "\n\n"
    . "1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE\n"
    . "Nombre: {$d['nombres']} {$d['apellidos']}\n"
    . "Documento: {$d['tipo_doc']} {$d['num_doc']}\n"
    . "Domicilio: {$d['domicilio']}\n"
    . "Teléfono: {$d['telefono']}\n"
    . "Correo: {$d['email']}\n"
    . ($menor ? "Menor de edad. Padre, madre o apoderado: {$d['apoderado']}\n" : '')
    . "\n2. IDENTIFICACIÓN DEL BIEN CONTRATADO\n"
    . "Tipo: {$d['bien']}\n"
    . "Monto reclamado: {$monto}\n"
    . "Descripción: {$d['descripcion']}\n"
    . "\n3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR\n"
    . "Tipo: {$d['tipo']}\n"
    . "Detalle: {$d['detalle']}\n"
    . "Pedido: {$d['pedido']}\n"
    . "\n4. OBSERVACIONES Y ACCIONES ADOPTADAS POR EL PROVEEDOR\n"
    . "(Pendiente de respuesta)\n\n"
    . "RECLAMO: disconformidad relacionada a los productos o servicios.\n"
    . "QUEJA: disconformidad no relacionada a los productos o servicios, o malestar o descontento respecto a la atención al público.\n\n"
    . "La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.\n"
    . "El proveedor deberá dar respuesta al reclamo en un plazo no mayor a quince (15) días hábiles improrrogables.\n";

function enviar(string $para, string $asunto, string $cuerpo, string $responderA): bool
{
    $cabeceras = [
        'From: ' . mb_encode_mimeheader('Libro de Reclamaciones', 'UTF-8') . ' <' . CORREO_REMITENTE . '>',
        'Reply-To: ' . $responderA,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];
    return @mail($para, mb_encode_mimeheader($asunto, 'UTF-8'), $cuerpo, implode("\r\n", $cabeceras), '-f' . CORREO_REMITENTE);
}

$asunto = "Hoja de Reclamación N.º {$numero} ({$d['tipo']})";
$alProveedor = enviar(CORREO_PROVEEDOR, $asunto, $hoja, $d['email']);
$alConsumidor = enviar(
    $d['email'],
    $asunto . ' - ' . RAZON_SOCIAL,
    "Hola {$d['nombres']}:\n\nRecibimos tu {$d['tipo']}. Esta es la copia de tu Hoja de Reclamación.\n\n" . $hoja,
    CORREO_PROVEEDOR
);

if (!$guardado && !$alProveedor) {
    responder(500, ['ok' => false, 'mensaje' => 'No se pudo registrar la reclamación. Comunícate por teléfono o WhatsApp.']);
}

$mensaje = "Tu hoja de reclamación N.º {$numero} fue registrada el {$fecha}. "
    . ($alConsumidor ? "Enviamos una copia a {$d['email']}. " : 'No pudimos enviarte la copia por correo: anota el número de hoja. ')
    . 'Te responderemos en un plazo máximo de 15 días hábiles.';

responder(200, ['ok' => true, 'numero' => $numero, 'fecha' => $fecha, 'copia' => $alConsumidor, 'mensaje' => $mensaje]);
