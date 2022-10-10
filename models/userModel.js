const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static register method
userSchema.statics.register = async function (email, password) {
  // validation
  if (!email || !password) throw Error("Please fill all the fields");
  if (!validator.isEmail(email)) throw Error("Please fill a valid email");
  if (!validator.isStrongPassword(passwrod))
    throw Error("Password is not strong");

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("Please fill all the fields");

  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect email and password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("Incorrect email and password");

  return user;
};

module.exports = mongoose.model("User", userSchema);
