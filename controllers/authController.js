const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Email = require("../utils/email");

const signToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = function (user, statusCode, res) {
  const token = signToken(user.id);
  user.password = undefined;

  res.status(statusCode).json({
    status: "Success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    names: req.body.names,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    summary: req.body.summary,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const url = `${req.protocol}://${req.get("host")}/me`;
  console.log(url);
  await new Email(newUser, url).sendWelcome();
  createSendToken(newUser, 201, res);
});

exports.logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Check if user provided his email and password
  if (!email || !password) {
    return next(new AppError("Please provide your email and Password", 400));
  }
  // 2) find user with correct password
  const user = await User.findOne({ email }).select("+password");
  const correct = await user.correctPassword(password, user.password);

  if (!email || !correct) {
    return next(new AppError("Incorrect email or Password", 400));
  }
  const token = signToken(user.id);
  res.status(200).json({
    status: "Success",
    token,
  });
});
