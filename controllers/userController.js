const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.deleteAllUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany();
  res.status(200).json({
    status: "success",
  });
});
