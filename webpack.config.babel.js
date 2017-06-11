import path from 'path';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: {
    js: './src/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:'cacheDirectory=.babel_cache',
        },
      },
      {
       test: /\.(scss|css)$/,
       include: [
         path.resolve(__dirname, './src/styles'),
       ],
       use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         loader: [
           {
             loader: 'css-loader',
             options: {
               modules: true,
               importLoaders: 3,
               sourceMap: true,
             },
           }, {
             loader: 'postcss-loader',
             options: {
               browsers: 'last 2 version',
               sourceMap: true,
             },
           }, {
             loader: 'sass-loader',
             options: {
               // outputStyle: 'expanded',
               sourceMap: true,
               // sourceMapContents: true,
             },
           },
         ],
       }),
      }
    ],
  },
  plugins: [extractSass],
};

export default config;
