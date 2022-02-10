const express = require('express')
const app = express()

app.get('/api/courses', (req, res) => {
  console.log('request');
  setTimeout(() => {
    res.json([{name: 'web全栈', price: 100},{name: 'web高级', price: 200}])
  }, 1000)
})

app.listen(3000)