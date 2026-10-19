// Genera portugal-web-hosting.zip a partir de dist/ (correr después de `npm run build`).
// Astro deja en dist/_astro/ los originales de algunas imágenes aunque ninguna página los use;
// se quitan antes de comprimir para no subir megas de más.
import { readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const DIST = 'dist';
const ZIP = 'portugal-web-hosting.zip';

const archivos = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? archivos(p) : [p];
  });

const todos = archivos(DIST);
const texto = todos
  .filter((p) => /\.(html|css|js|xml|php)$/.test(p))
  .map((p) => readFileSync(p, 'utf8'))
  .join('\n');

let quitados = 0;
for (const p of todos) {
  const nombre = p.split(/[\\/]/).pop();
  if (p.includes('_astro') && /\.(png|jpe?g)$/i.test(nombre) && !texto.includes(nombre)) {
    rmSync(p);
    quitados++;
  }
}

rmSync(ZIP, { force: true });
// Debe ser el tar de Windows (bsdtar): con -a y extensión .zip crea un zip real. El tar de Git
// (GNU) suele ir antes en el PATH, ignora -a y genera un .tar con nombre .zip que cPanel no abre.
// Se pasan las entradas de dist/ por nombre para que dentro del zip no queden con prefijo "./".
const TAR = join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'tar.exe');
execFileSync(TAR, ['-a', '--format=zip', '-cf', ZIP, '-C', DIST, ...readdirSync(DIST)], { stdio: 'inherit' });

// Comprobación: todo zip empieza con la firma "PK\x03\x04".
const firma = readFileSync(ZIP).subarray(0, 4).toString('latin1');
if (firma !== 'PK\x03\x04') throw new Error(`${ZIP} no es un zip válido (firma ${JSON.stringify(firma)})`);
const mb = (statSync(ZIP).size / 1048576).toFixed(1);
console.log(`${ZIP}: ${mb} MB (${quitados} imágenes sin uso excluidas)`);
