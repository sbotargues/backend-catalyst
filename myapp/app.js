var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios').default;
const fs = require('fs')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("ooooo")
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // console.log("ooooo")
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// keyWordFUnction(process.env.keyword);

// function keyWordFUnction(keyword) {

//     axios.post('http://completion.amazon.com/search/complete?search-alias=aps&client=amazon-search-ui&mkt=1&q='+keyword, {
//       responseType: "json",
//       data: {
//         "search-alias": "aps",
//         "client": "amazon-search-ui",
//         "mkt": 1,
//         "q": keyword
//       },
//     })
//     .then(function (response) {
//       fs.writeFile("jsonFiles/"+keyword+".json", JSON.stringify(response.data[1]), 'utf8', function (err) {
//         if (err) {
//             console.log("An error occured while writing JSON Object to File.");
//             return console.log(err);
//         }
//         res.send(response.data[1])
//         console.log(keyword+" JSON file has been saved.");
//     });
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// }

module.exports = app;
