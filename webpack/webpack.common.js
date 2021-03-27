require('dotenv').config();

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let HOT = process.env.HOT;
if (process.env.NODE_ENV !== 'dev') {
  HOT = false;
}

module.exports = {
  entry: {
    index: HOT
      ? [
          path.resolve(__dirname, '../', 'src/index.js'),
          'webpack-hot-middleware/client',
        ]
      : path.resolve(__dirname, '../', 'src/index.js'),
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, '..', 'src/assets'),
      '@': path.resolve(__dirname, '..', 'src'),
      '@app': path.resolve(__dirname, '..', 'src/app'),
      '@containers': path.resolve(__dirname, '..', 'src/app/containers'),
      '@components': path.resolve(__dirname, '..', 'src/app/components'),
    },
  },
  stats: {
    colors: true,
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    hot: true,
    open: true,
    overlay: true,
    compress: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              emitError: true,
              emitWarning: true,
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '..', 'src'),
        use: [
          process.env.NODE_ENV !== 'dev'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: resourcePath => resourcePath.endsWith('.module.css'),
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== 'dev'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: resourcePath => resourcePath.endsWith('.module.scss'),
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            context: 'src',
          },
        },
      },
      {
        test: /\.(eot|gif|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=100000'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Furniture shop',
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
