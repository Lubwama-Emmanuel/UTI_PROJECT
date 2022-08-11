const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    names: {
      type: String,
      required: [true, "Please provide user name:"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email:"],
      lowercase: true,
      unique: true,
    },
    gender: {
      type: String,
      required: [true, "Please tell us your gender"],
    },
    age: {
      type: String,
      // required: [true, "Tell us your age"],
    },
    address: {
      type: String,
      // required: [true, "Tell us your address"],
    },
    summary: {
      type: String,
      // required: [true, "Brief us about your problem"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    password: {
      type: String,
      required: [true, "Please provide your password:"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please Confirm your password::"],
      validate: {
        validator: function (el) {
          return this.password === el;
        },
        message: "Passwords dont match",
      },
    },
  },
  {}
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  this.passwordConfirm = undefined;

  return next();
});

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
