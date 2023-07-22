const express = require("express");
const router = express.Router();

const {
  registerController,
  authController,
  getUserProfile,
  UpdateUserProfile,
} = require("../controllers/userController");

// import { protect } from "../middlewares/authMiddleware";

router.route("/").post(registerController);

router.post("/Login", authController);

router.route("/profile").get(getUserProfile).get(UpdateUserProfile);

module.exports = router;
