module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  rules: {
    'react/prop-types': 'off',
  },
};
