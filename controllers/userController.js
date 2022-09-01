const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAll = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(201).json({
    status: "success",
    data: {
      users,
    },
  });
});
exports.deleteAllUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany();
  res.status(200).json({
    status: "success",
  });
});
