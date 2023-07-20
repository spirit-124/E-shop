const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    isAdmin: {
      type: "boolean",
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.matchPassword = async (enterPassword) => {
  return await bcrypt.compare(enterPassword, this.password);
};

//middlware for password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
