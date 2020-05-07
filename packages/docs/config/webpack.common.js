const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './src/index.tsx',
 module: {
  rules: [
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        // options: {
        //   rootMode: 'upward',
        // },
      },
    },
  ],
},
 plugins: [
  //  new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
   new CleanWebpackPlugin(),
   new HtmlWebpackPlugin({
     title: 'Production',
   }),
 ],
 resolve: {
   extensions: ['.js', '.jsx', '.tsx', '.ts'],
   symlinks: true,
 },
 output: {
   filename: 'index.js',
   path: path.resolve(__dirname, 'dist'),
 },
};
