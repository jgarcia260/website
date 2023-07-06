const express = require('express')
const app = express()
const port = 3000

var myRoutes = require('./routes/routes');

// middleware. interceptors before calling the handler
app.use((req, res, next) => {
  console.log(Date.now());
  next()
})

myRoutes(app);

// throw 400 if path doesn't exist
app.use((req ,res) => {
  console.log('error');
  res.send('404');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
