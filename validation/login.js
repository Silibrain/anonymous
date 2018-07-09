// const Validator = require("validator");
// const isEmpty = require("./is-empty");
// require("dotenv").config();
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const GoogleStrategy = require("passport-google-oauth20");
// const keys = require("../keys");
// const User = require("../models/user");
// const bcrypt = require("bcrypt-nodejs");

// module.exports = function validateLoginInput(data) {
//   let errors = {};

//   data.email = !isEmpty(data.email) ? data.email : "";
//   data.password = !isEmpty(data.password) ? data.password : "";

//   if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is invalid";
//   }

//   if (Validator.isEmpty(data.email)) {
//     errors.email = "Email field is required";
//   }

//   if (Validator.isEmpty(data.password)) {
//     errors.password = "Password field is required";
//   }

//   return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };
