/* eslint-env node */
import('@rushstack/eslint-patch/modern-module-resolution')

export default [
  {
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'vue/multi-word-component-names': 'wrong'
    }
  }
]
