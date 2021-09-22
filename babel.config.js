module.exports = function (api) {
  if (api.env("test")) {
    return {
      presets: ["react-app"],
      plugins: ["@babel/plugin-transform-react-jsx"],
    };
  }

  return {
    presets: [
      () => ({
        plugins: ["@babel/plugin-transform-react-jsx"],
      }),
      ["react-app", { absoluteRuntime: false }],
    ],
    ignore: ["**/__tests__/*", "**/__mocks__/*", "**/__e2e__/*", "**/*.d.ts"],
  };
};
