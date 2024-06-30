const express = require('express')

//webpage route variables
var indexRouter = require('./routes/index');
var customerRouter = require('./routes/customer')
var serviceRouter = require('./routes/service')
var locationRouter = require('./routes/location')

const app = express()
// view engine setup
app.set('view engine', 'pug');
app.use("/public", express.static('public'));

app.get("/", (req, res) => {
    res.render('index')
})
app.use('/index', indexRouter);
app.use('/customer', customerRouter);
app.use('/service', serviceRouter);
app.use('/location', locationRouter);

app.listen(3000)

module.exports = app;