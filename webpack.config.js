module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              cacheDirectory: true
            }
          }
        ],
        exclude: []
      }
    ]
  },
  mode: "development",
  context: process.cwd(),
  entry: "./myFn",
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  plugins: []
};
