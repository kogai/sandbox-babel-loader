module.exports = {
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              cacheDirectory: false
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
