import scss from 'rollup-plugin-scss';

export default [
  'Dark css2less',
  'Dark less2css',
  'Habrahabr Darkness',
  'Habrahabr Darkness (Old site)',
  'VK Remove comments',
].map((name) => ({
  input: `./scss/${name}/style.scss`,
  output: {
    name,
    file: `dist/${name}/index.js`,
  },
  plugins: [
    scss({
      outputStyle: 'compressed',
    }),
  ]
}));
