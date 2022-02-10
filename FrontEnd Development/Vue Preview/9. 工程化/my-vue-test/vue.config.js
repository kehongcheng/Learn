module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/cart/' : '/',
  devServer: {
    // before(app) {
    //   app.get('/api/courses', (req, res) => {
    //     setTimeout(() => {
    //       res.json([{name: 'web全栈', price: 100},{name: 'web高级', price: 200}])
    //     }, 1000)
    //   })
    // },
    proxy: 'http://localhost:3000'
  }
}