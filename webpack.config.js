const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "app.js"),
  output: {
    path: path.resolve(__dirname, "public","dist"),
    filename: "bundle.js",
    // Workaround for 'digital envelope routines::unsupported error'
    hashFunction: 'xxhash64'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      // favicon: "./src/favicon.png"
    })
  ],
  devServer: {
    compress: true,
    port: 3000,
    liveReload: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      directory: path.resolve(__dirname, "public", "dist")
    },
    watchFiles: ['src/**'],
    historyApiFallback: true
  },
  mode: 'production'
}