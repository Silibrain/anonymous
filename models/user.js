const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true
  },

  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      function(input) {
        return input.length >= 6;
      }
    ]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  authMethod: {
    type: String
  },
  socialID: {
    type: String
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
