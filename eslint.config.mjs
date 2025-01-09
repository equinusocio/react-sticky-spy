import path from "node:path";
import { fileURLToPath } from "node:url";
import { mainConfig as lasalefamineConfig } from '@lasalefamine/eslint-config';
import { reactHooksConfig } from '@lasalefamine/eslint-config/hooks.mjs';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languageOptions = {
  parser: tsParser,
  ecmaVersion: 'latest',
  sourceType: 'script',

  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};

const jsFiles = ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'];

export default [{
  ignores: ["**/dist"],
},
...lasalefamineConfig.map(config => ({ ...config, files: jsFiles, languageOptions })),
...reactHooksConfig,
{
  rules: {
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/promise-function-async': 'off'
  },
}];
