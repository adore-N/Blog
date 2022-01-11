var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors'); // 跨域插件

let multer = require('multer');     //文件上传模块

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ImagesRouter = require('./routes/images')
var SaveMarkDown = require('./routes/saveMarkDown')
var GetMarkDown = require('./routes/getMarkDown')

var app = express();

//跨域设置
app.use(cors({
  "origin": ["http://localhost:8003","http://127.0.0.1:5500","http://localhost:8080","http://localhost:3001"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

//静态资源托管 
app.use(express.static(path.join(__dirname, 'public'))); 

//文件上传的存储位置 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
    //   cb(null, path.join(__dirname, 'public','upload','user'));
    // }else if(req.url.indexOf('banner')!==-1){
    //   cb(null, path.join(__dirname, 'public','upload','banner'));
    // }else{
      cb(null, path.join(__dirname, 'public/images'));
    // }
  }
});
let multerObj = multer({storage});
// let multerObj = multer({dest:'字符路径'})    //这样的指定方式存储位置太固定了,storage分目录
app.use(multerObj.any()); //指定上传文件的类型


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
console.log(1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', ImagesRouter);
app.use('/saveMarkDown', SaveMarkDown)
app.use('/getMarkDown', GetMarkDown)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
