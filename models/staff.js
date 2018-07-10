const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String},
  role: { type: String, required: true },
  phone: { type: String},
  bio: { type: String},
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
