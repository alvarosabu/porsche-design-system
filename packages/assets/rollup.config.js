import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const commonPlugins = () => [
  resolve({
    resolveOnly: [/^@porsche-design-system\/.*$/]
  })
];

export default [
  {
    input: 'src/index.ts',
    output: {
      esModule: false,
      dir: 'dist',
      format: 'umd',
      name: pkg.name,
      exports: 'named'
    },
    plugins: [
      ...commonPlugins(),
      typescript({ declaration: true, declarationDir: 'dist/types', rootDir: 'src/' })
    ]
  },
  {
    input: 'src/index.ts',
    output: { dir: 'dist/esm', format: 'esm' },
    plugins: [...commonPlugins(), typescript()]
  }
];
