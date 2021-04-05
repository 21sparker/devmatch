import webpack from 'webpack';

export const entry = './src/index.js';
export const module = {
  rules: [
    //...
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
  ],
};