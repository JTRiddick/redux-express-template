// Sourcemap babel-loader scss loader uglifyjs
import webpack from 'webpack';
import path from 'path';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };



let extractSCSS = new ExtractTextPlugin({
  filename:"style.scss",
  allChunks:true
})
let extractCSS = new ExtractTextPlugin('../css/style.css');

const uglifyJs = new UglifyJSPlugin({
  sourceMap: true
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
        test:/\.scss$/,
        include: path.join(__dirname, 'src','static','styles'),
        exclude: /node_modules/,
        // loader:ExtractTextPlugin.extract('css-loader!sass-loader')
        loader: extractCSS.extract('css-loader?modules=true!sass-loader?sourceMap=true?')
      }
    ],
  },
  plugins:[
    extractCSS,
    extractSCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings:false},
      mangle:true,
      sourcemap:false,
      beautify:false,
      dead_code:true
    }),
    new ExtractTextPlugin('../css/style.css')
  ]
};

export default config;
