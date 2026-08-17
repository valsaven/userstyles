import * as sass from 'sass';
import { minify } from 'csso';
import { mkdir, writeFile, rm } from 'node:fs/promises';

const full = process.argv.includes('--full');

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

const styles = [
  'Dark css2less',
  'Dark less2css',
  'Habrahabr Darkness',
  'Habrahabr Darkness (Old site)',
];

await Promise.all(
  styles.map(async (name) => {
    const result = sass.compile(`scss/${name}/style.scss`, {
      loadPaths: ['scss'],
      silenceDeprecations: ['moz-document', 'import'], // Remove warnings
    });

    let css = result.css;

    if (!full) {
      css = minify(css).css;
    }

    await writeFile(`dist/${name}.css`, css);

    console.log(`✓ ${name}.css`);
  })
);
