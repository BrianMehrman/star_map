const styleRules = [
  "./eslint-rules/react",
  "./eslint-rules/style",
  "./eslint-rules/es6",
  "./eslint-rules/errors",
  "./eslint-rules/best-practices",
  "./eslint-rules/variables"
].map(require.resolve);


module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: styleRules.concat("plugin:prettier/recommended"),
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
  },
};
