const express = require('express')


var indexRouter = require('./routes/index');

const app = express()
// view engine setup
app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.render('index')
})
app.use('/index', indexRouter);

app.listen(3000)

module.exports = app;