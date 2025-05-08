module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@": "./src",
          },
        },
      ],
      require.resolve("expo-router/babel"),
    ],
  };
};
