module.exports = {
  root: true,
  env: {
    node: true,
    // The Follow config only works with eslint-plugin-vue v8.0.0+
    // 解决vue3.2以后不手动导入defineProps、defineEmits、defineExpose等报错的问题
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  }
}
