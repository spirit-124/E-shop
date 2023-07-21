const Product = require("../models/productModels");
// const asyncHandler = require("express-async-handler");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({
      error: error.message,
      message: "Products not found",
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(404).json({ error, message: "Product not found" });
  }
};

module.exports = { getAllProducts, getSingleProduct };
