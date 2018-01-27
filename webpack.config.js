module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js',
    library: 'next-auth-client',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  externals: [
    {
      'isomorphic-fetch': {
        root: 'isomorphic-fetch',
        commonjs2: 'isomorphic-fetch',
        commonjs: 'isomorphic-fetch',
        amd: 'isomorphic-fetch'
      }
    }
  ]
};