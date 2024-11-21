export default {
  overrides: [
    {
      files: ['*/package.json'],
      options: {
        useTabs: false
      }
    }
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@app/(.*)$',
    '^@test/(.*)$',
    '^[./]'
  ],
  trailingComma: 'none',
  singleQuote: true,
  semi: true
};
