var express = require('express');
var router = express.Router();
let mongodb = require('../utils/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
  // 获取请求参数
  const reqData = req.body;
  console.log('reqData', reqData);

  // 查询数据库
  mongodb({
    dbName: '',
    collectionName: '',
    success: ({collectionName, client, ObjectID}) => {
      collectionName.find({
        // 刷选条件
        order: 0
      },{
        // 配置
      }).toArray((err, result)=> {
        if(err) {
          res.send({ err: 1, msg: 'acticle集合操作失败' })
        } else {
          res.send(result); 
        }

        client.close();
      })
    },
    error: (err) => {
      console.log(err)
    }
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
