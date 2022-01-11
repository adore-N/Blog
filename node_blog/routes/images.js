var express = require('express');
var router = express.Router();
let fs = require('fs');         //需要对用户上传的头像,进行文件处理
let pathLib = require('path');     //需要对用户上传的图片进行改名+后缀的处理

/* POST users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body, 'req.body');
  let iconUrl = ''
  if(req.files && req.files.length>0 ){
    // //改名的,整合路径,存储  fs.renameSync(oldfile,newfile);
    fs.renameSync(
        //如果用户上传图片,就把用户的图片存储到服务器,给一个名字
        req.files[0].path,
      req.files[0].path + pathLib.parse(req.files[0].originalname).ext
    )
    iconUrl = '/images/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
  }
  // 对于图片
  res.send({
    success : 1,           // 0 表示上传失败，1 表示上传成功
    message : "提示的信息，上传成功或上传失败及错误信息等。",
    url: `http://localhost:3000${iconUrl}`        // 上传成功时才返回;
  })
});

module.exports = router;
