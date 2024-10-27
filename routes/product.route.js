import express from 'express';
import * as ProductController from '../controllers/product.controller.js';

const router = express.Router();

// ! CRUD ROUTES   
// * router path /api/v1/product 
//? create route 
router.post("/product", ProductController.createProduct); // * create a product 
//? Read Route
router.get("/product", ProductController.getAllProducts); //* returns all products
router.get("/product/:itemId", ProductController.getProductById); //* returns one product by id param
//? UPDATE ROUTE 
router.patch("/product/:itemId", ProductController.updateProductById); //* updates one product by id param
//? DELETE ROUTE
router.delete("/product/:itemId", ProductController.deleteProductById); //* delete one product by id param



export default router;




