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
    {
     test: /\.css$/,
     use: [
       'style-loader',
       'css-loader',
     ],
   },
   {
     test: /\.(png|svg|jpg|gif)$/,
     use: [
       'file-loader',
     ],
   },
  ],
},
 plugins: [
  //  new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
   new CleanWebpackPlugin(),
   new HtmlWebpackPlugin({
    //  title: 'Production',
     filename: 'index.html',
     template: 'public/index.html'
   }),
 ],
 resolve: {
   extensions: ['.js', '.jsx', '.tsx', '.ts'],
   // symlinks: true,

   // modules: [path.resolve(__dirname, 'src'), 'node_modules'],

   alias: {
      // '@tlon/indigo-react': path.resolve(__dirname, '../../indigo/dist/index.js'),
      // '@tlon/indigo-forms': path.resolve(__dirname, '../../forms'),
      // '@tlon/indigo-buttons': path.resolve(__dirname, '../../buttons'),
      // '@tlon/indigo-controls': path.resolve(__dirname, '../../controls'),
      // '@tlon/indigo-core': path.resolve(__dirname, '../../core'),
      // '@tlon/indigo-layouts': path.resolve(__dirname, '../../layouts'),
      // '@tlon/indigo-text-editor': path.resolve(__dirname, '../../text-editor'),
      // '@tlon/indigo-utils': path.resolve(__dirname, '../../utils'),
    }
 },
 output: {
   filename: 'index.js',
   path: path.resolve(__dirname, 'dist'),
 },
};
