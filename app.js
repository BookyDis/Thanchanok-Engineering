
const express = require('express')


//webpage route variables
var indexRouter = require('./routes/index');
var serviceRouter = require('./routes/service')
var locationRouter = require('./routes/location')
var eletricRouter = require('./routes/electric')
var hvacRouter = require('./routes/hvac')
var pipingRouter = require('./routes/piping')
var machineRouter = require('./routes/machine')
var fabricationRouter = require('./routes/fabrication')
var autoRouter = require('./routes/auto')


const app = express()
// view engine setup
app.set('view engine', 'pug');
app.use("/public", express.static('public'));

app.get("/", (req, res) => {
    res.render('index')
})
app.use('/index', indexRouter);
app.use('/service', serviceRouter);
app.use('/hvac', hvacRouter);
app.use('/machine', machineRouter);
app.use('/auto', autoRouter);
app.use('/electric', eletricRouter);
app.use('/fabrication', fabricationRouter);
app.use('/location', locationRouter);
app.use('/piping', pipingRouter);


app.listen(3000)



module.exports = app;



