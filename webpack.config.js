const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = `${process.env.NODE_ENV}`.includes('prod')
  ? 'production'
  : 'development'
const prod = mode == 'production'

module.exports = {
  mode,
  devtool: prod ? 'none' : 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    compress: true,
    clientLogLevel: 'silent',
    host: '0.0.0.0',
    hot: false,
    hotOnly: false,
    inline: false,
    historyApiFallback: true,
  },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist/'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/',
        to: path.join(__dirname, 'dist/'),
        exclude: ['*html'],
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'css',
          test: /^((?!tailwind).)*\.css$/,
          chunks: 'all',
          enforce: true,
        },
        tailwind: {
          name: 'css.tailwind',
          test: /tailwind\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /tailwind\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('cssnano'), require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /tailwind\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              localsConvention: 'camelCaseOnly',
              modules: 'local',
              esModule: true,
              sourceMap: !prod,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: false,
              plugins: [
                require('tailwindcss'),
                require('postcss-import'),
                require('postcss-nested'),
                require('cssnano'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ts-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [path.join(process.cwd(), 'node_modules')],
      },
    ],
  },
}
