module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    indentation: 2,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'for', 'each', 'include', 'mixin', 'content'],
      },
    ],
    'order/order': ['less-mixins', 'dollar-variables', 'custom-properties', 'declarations', 'rules'],
  },
};
