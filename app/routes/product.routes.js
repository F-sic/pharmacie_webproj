// var express = require('express');
// var router = express.Router();
let controller = require('../controllers/product.controller')

module.exports = function (app, db) {

  /**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       name:
 *         type: string
 *       _id:
 *         type: string
 *       about:
 *         type: string
 *       PID:
 *         type: integer
 *       price:
 *         type: number
 *       quantity:
 *         type: integer
 */

/**
 * @swagger
 * /api/1.0/products:
 *   get:
 *     tags:
 *       - Products
 *     description: Retourne un tableau de tous les produits present dans la base
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: st
 *         description: Chaine de caractere recherchée
 *         in: query
 *         required: false
 *         type: string
 *       - name: low
 *         description: quantité a surveiller
 *         in: query
 *         required: false
 *         type: integer
 *     responses:
 *       200:
 *         description: An array of products
 *         schema:
 *           $ref: '#/definitions/Product/'
 */
  app.get('/api/1.0/products', controller.getAll)            // all + alerte 
 
// /**
//  * @swagger
//  * /api/1.0/products/low:
//  *   get:
//  *     tags:
//  *       - Products
//  *     description: Retourne un tableau de tous les produits present dans la base ou la quantité est inférieur a une certaine valeur
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: An array of products
//  *         schema:
//  *           $ref: '#/definitions/Product'
//  */
//   app.get('/api/1.0/products/low', controller.getLow)            // alerte 

/**
 * @swagger
 * /api/1.0/products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     description: Retourne un produit et tous ses parametres 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: le PID du produit a afficher
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 */
app.get('/api/1.0/products/:id', controller.getId)             //info from add 

/**
 * @swagger
 * /api/1.0/products/{id}:
 *   put:
 *     tags:
 *       - Products
 *     description: Updates a single product can be used to update any property, mostly used for update product's quantity 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: le PID du produti a modifier
 *         in: path
 *         required: true
 *         type: integer
 *       - name: product
 *         description: Les nouveelles propriétés ex. {name":"Test Med","quantity":100,"about":"Heart stuff","price":21.01}
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
  app.put('/api/1.0/products/:id', controller.updQty)              //update a product
  
/**
 * @swagger
 * /api/1.0/products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     description: Efface un produit en foncition de son PID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: PID du produit a effacer
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
  app.delete('/api/1.0/products/:id', controller.delete)            //delete product

/**
 * @swagger
 * /api/1.0/products:
 *   post:
 *     tags:
 *       - Products
 *     description: Ajoute un produit dans la base de données
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: NewProduct
 *         description: Les propriété du produit {"PID":123,"name":"Test Med","quantity":100,"about":"Heart stuff","price":21.01}
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully created
 */
  app.post('/api/1.0/products', controller.create) ///add new product
  
// /**
//  * @swagger
//  * /api/1.0/search:
//  *   get:
//  *     tags:
//  *       - Products
//  *     description: recherche un chaine de caractere dans le nom d'un produit
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: st
//  *         description: Chqine de caractere recherchée
//  *         in: query
//  *         required: true
//  *         type: string
//  *     responses:
//  *       200:
//  *         description: An array of products
//  *         schema:
//  *           $ref: '#/definitions/Product'
//  */
//   app.get('/api/1.0/search', controller.search)  // search by name
}
