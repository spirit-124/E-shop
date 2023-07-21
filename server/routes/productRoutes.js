const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
} = require("../controllers/productController");
const router = express.Router();

// GET ROUTE FOR ALL PRODUCTS
router.get("/products", getAllProducts);

// GET ROUTE FOR Single PRODUCT
router.get("/products/:id", getSingleProduct);

module.exports = router;
