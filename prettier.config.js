/** @type {import('prettier').Config} */
export default {
  overrides: [
    {
      files: "*.yaml",
      options: {
        singleQuote: true,
      },
    },
  ],
};
