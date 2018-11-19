module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.16.0.2:5000',
        changeOrigin: true
      }
    }
  }
}