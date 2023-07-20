const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users");
const products = require("./data/products");
// const User = require("./models/UserModel");
const Product = require("./models/ProductModel");
const Order = require("./models/OrderModel");
const connectDb = require("./config/config");

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createuser = await User.insertMany(users);
    const adminUser = createuser[0]._id;
    const SampleData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(SampleData);
    console.log("Data Imported!!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
