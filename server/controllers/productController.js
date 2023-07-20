const Product = require("../models/productModels");
// const asyncHandler = require("express-async-handler");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({
      error: error.message,
      message: "Product not found",
    });
  }
};

module.exports = { getAllProducts };
