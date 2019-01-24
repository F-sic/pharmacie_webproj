let mongoose = require('mongoose')
const Config = require('../config')
var fs = require("fs");

let DbUrl = "mongodb://localhost:27017/pharma_db"

mongoose.connect(DbUrl, { useNewUrlParser: true }, function (err) {
  if (err) { throw err }
  console.log('Connected to database ... ¯\\(ツ)/¯ ')
})

let Schema = mongoose.Schema
let productSchema = new Schema({
  PID: Number,
  name: String,
  quantity: Number,
  about: String,
  price: Number
})
var Product = mongoose.model('Product', productSchema)
module.exports = Product

var db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
  console.log(':::')
});

var data = fs.readFileSync("db/product_list.json")


// Product.remove({}, function (err) {
//   Product.collection.insertMany(JSON.parse(data), err => {
//     if (err) {
//       console.log('ERROR init', err)
//     } else {
//       console.log('Init database OK')
//     }
//   })
// });


module.exports = { mongoose, Product }











// iptables -A INPUT -s 127.0.0.1 -p tcp --destination-port 27017 -m state --state NEW,ESTABLISHED -j ACCEPT
// iptables -A OUTPUT -d 127.0.0.1 -p tcp --source-port 27017 -m state --state ESTABLISHED -j ACCEPT


