const path = require('path');;
const webpack = require('webpack');
module.exports = {
  target: 'node',
  devtool: 'source-map',
  entry: './xmind2smmx.js',
  output: {
   
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 plugins: [
  new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ],
 module: {
    rules: [
      {
        test: /\.jsonata$/,
        use: [
          {loader: 'raw-loader',
          options: {
              esModule: false,
          }
        }

        ] 
        
      },
    ],
  },
};
