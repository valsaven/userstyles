import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import { rimrafSync } from 'rimraf';

// Remove the 'dist' folder before starting the build
rimrafSync('dist');

const task = process.env.ROLLUP_TASK;

export default [
  'Dark css2less',
  'Dark less2css',
  'Habrahabr Darkness',
  'Habrahabr Darkness (Old site)',
  'VK Remove comments',
].map((name) => ({
  input: `./scss/${name}/style.scss`,
  output: {
    file: `./dist/${name}.css`,
  },
  plugins: [
    postcss({
      extract: true,
      modules: false,
      use: ['sass'],
      plugins: [autoprefixer()],
      minimize: task  === 'full' ? false : true,
    }),
  ],
}));
