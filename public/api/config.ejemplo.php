<?php
// Copia este archivo como config.php (en esta misma carpeta, en el hosting) y completa los datos.
// config.php contiene una contraseña: no se sube al repositorio ni va dentro del zip del sitio.

return [
    // Zoho Mail. Con plan de pago y dominio propio el servidor suele ser smtppro.zoho.com;
    // con plan gratuito, smtp.zoho.com. Zoho lo indica en Configuración > Cuentas de correo > SMTP.
    'smtp_host' => 'smtppro.zoho.com',
    'smtp_puerto' => 465,
    'smtp_seguridad' => 'ssl', // 465 con 'ssl', o 587 con 'tls'

    // Cuenta de Zoho que envía los correos y su contraseña de aplicación
    // (Zoho: Mi cuenta > Seguridad > Contraseñas de aplicación). No uses la contraseña normal.
    'smtp_usuario' => 'reclamos@contraincendioportugal.com',
    'smtp_clave' => 'CONTRASEÑA-DE-APLICACION',

    // Remitente visible: la misma cuenta o un alias suyo en Zoho.
    'remitente' => 'reclamos@contraincendioportugal.com',

    // Buzón de la empresa que recibe las hojas de reclamación.
    'destino' => 'info@contraincendioportugal.com',
];
