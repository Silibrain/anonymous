const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

// define the schema for our user model
const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required"
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  title: {
    type: String
  },
  bio: {
    type: String
  },
  role: {
    type: String
  }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  console.log(password, this);
  console.log(bcrypt.compareSync(password, this.password));
  return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);