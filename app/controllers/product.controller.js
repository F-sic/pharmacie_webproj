// let mongoose = require('mongoose')
// let Product = require('../models/product.models')
let Product = require('../../db/database.js').Product

// get all Product
exports.getAll = function (req, res, next) {
  console.log("################################Querying all product#######################")
  if ( typeof req.query.st !== "undefined") {
    Product.find({ name: { $regex: '.*' + req.query.st + '.*' } }, { _id: false }, function (err, query) {
      if (err) {
        res.status(500)
        throw err
      }
      res.json(query).status(200)
      console.log(query)
      
    })
  } else if (typeof req.query.low !== "undefined") {
    Product.find({ quantity: { $lt: req.query.low } }, { _id: false }, function (err, query) {
      if (err) {
        res.status(500)
        return next(err)
      }
      res.json(query).status(200)
    })
    
  } else {
    Product.find({}, { _id: false }, function (err, query) {
      if (err) {
        res.status(500)
        return next(err)
      }
      res.json(query).status(200)
    })
  }
}

// // get all low quantity products
// exports.getLow = function (req, res, next) {
//   console.log("################################Querying low quantity products#######################")
//   Product.find({ quantity: { $lt: 90 } },{ _id: false }, function (err, query) {
//     if (err) {
//       res.status(500)
//       return next(err)
//     }
//     res.json(query).status(200)
//   })
// }

// get a product by it's PID
exports.getId = async function (req, res) {
  console.log("################################Querying one product#######################")
  await Product.find({ PID: req.params.id }, { _id: false }, function (err, query) {
    if (err) {
      res.status(500)
      return next(err)
    }
    res.json(query).status(200)
  })
}

//update a product
exports.updQty = function (req, res, next) {
  console.log("################################UPDATE  A PRODUCT ###########################")
  console.log(req.body)
  Product.findOneAndUpdate({ PID: req.params.id },
    { name: req.body.name, price: req.body.price, quantity: req.body.quantity, about: req.body.about },
    { new: true },
    function (err, doc) {
      if (err) {
        res.status(500)
        return next(err)
      }
      res.send(doc)
    })
}

// create product
exports.create = function (req, res, next) {
  console.log("################################CREATE A PRODUCT#######################")
  console.log(req.body)
  Product.create({ PID: req.body.PID, name: req.body.name, price: req.body.price, quantity: req.body.quantity, about: req.body.about }, function (err, obj) {
    if (err) {
      res.status(500)
      return next(err)
    }
    res.json(obj).status(200)
    console.log(obj)
  })
}

// delete a products by it's PID
exports.delete = function (req, res, next) {
  console.log("################################DELETE A PRODUCT#######################")
  console.log(req.params.id)
  Product.deleteOne({ PID: req.params.id }, function (err, obj) {
    if (err) {
      res.status(500)
      return next(err)
    }
    console.log(obj)
    res.json(obj).status(200)
  })
}

// search a string  in a product name
// exports.search = function (req, res) {
//   console.log("################################SEARCH A PRODUCT#######################")
//   console.log(req.query)
//   Product.find({ name: { $regex: '.*' + req.query.st + '.*' } },{ _id: false }, function (err, query) {
//     if (err) {
//       res.status(500)
//       throw err
//     }
//     res.json(query).status(200)
//     console.log(query)

//   })
// }
