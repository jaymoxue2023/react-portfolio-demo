// Exporting the ESLint configuration object
module.exports = {
  env: {
    browser: true, // Enable browser environment
    es2021: true, // Enable ES2021 syntax
    node: true, // Enable Node.js environment
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'], // Use recommended ESLint rules, React plugin rules, and Prettier formatting
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module', // Parse the files as modules
  },
  plugins: ['react'], // Enable React plugin
  rules: {
    'react/react-in-jsx-scope': 'off', // Turn off the rule that requires importing React in JSX files
    'react/prop-types': 'off', // Turn off the rule that requires prop types
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the installed React version
    },
  },
};
