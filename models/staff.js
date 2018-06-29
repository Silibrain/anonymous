const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  accountname: { type: String, required: true },
  accounttype: { type: String, required: true },
  amount: { type: Number, required: true },
  entrydate: { type: Date, default: Date.now },
  exitdate: { type: Date},
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
