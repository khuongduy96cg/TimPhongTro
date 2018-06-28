var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
// var session = require('express-session');
// var passport = require('passport');
var mongoose = require('mongoose');

var user = require('./routes/user');
var room = require('./routes/room');
var province = require('./routes/province');
var district = require('./routes/district');
var ward = require('./routes/ward');
var street = require('./routes/street');
var need = require('./routes/need');
var type = require('./routes/type');
var utility = require('./routes/utility');
var message = require('./routes/message');
var uploadfile = require('./routes/uploadfile');
// var style = require('./routes/style');
// var manu = require('./routes/manu');
var app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/dbprjfindroom')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({ secret: 'session secret key' }));
// app.use(passport.initialize());
// app.use(passport.session());
// require('./config/passport')(passport);

app.use('/user', user);
app.use('/room', room);
app.use('/province' , province);
app.use('/district' , district);
app.use('/ward' , ward);
app.use('/street' , street);
app.use('/need' , need);
app.use('/type' , type);
app.use('/utility', utility);
app.use('/message', message);
app.use('/uploadfile' , uploadfile);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//ng serve --proxy-config proxy.config.json
module.exports = app;