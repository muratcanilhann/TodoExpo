module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@style": "./src/style", 
        },
      },
    ],
  ],
};
