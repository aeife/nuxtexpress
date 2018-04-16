module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', 'standard'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': ['warn', 'always'],
    'indent': ['warn', 4],
    "vue/html-indent": ["warn", 4]
  },
  globals: {}
}
