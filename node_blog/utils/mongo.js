/**
 * mongodb 连接
 */
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let ObjectID = mongodb.ObjectID

module.exports = ({url, dbName, collectionName, success, error}) => {

  url = url || 'mongodb://127.0.0.1:27017';
  dbName = dbName || 'blog';
  collectionName = collectionName || 'acticle';

  mongoCt.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
      if (err) {
          error && error('链接库错误')
      } else {
          console.log('数据库连接成功');
          let db = client.db(dbName);

          let collection = db.collection(collectionName);
          success && success({collection, client, ObjectID})

      }
  })
}