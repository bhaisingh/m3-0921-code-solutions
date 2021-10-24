module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};
