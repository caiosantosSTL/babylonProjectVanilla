const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {app:'./src/model.js'}, // arquivo a converter
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída JavaScript
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Arquivos TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.png'], // Extensões de arquivos que o Webpack deve considerar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Arquivo HTML de entrada
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/pics/*", to: "" },
        { from: "public/models/*", to: "" },
        { from: "public/texture/sky/*", to: "" },
      ],
    }),
  ],
};