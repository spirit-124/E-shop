const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./config/config");
dotenv.config();
connectDb();

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/test", (req, res) => {
  console.log("Test Purpose");
  res.json({
    message: "Hello There",
  });
});
app.use("/api/v1", productRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
