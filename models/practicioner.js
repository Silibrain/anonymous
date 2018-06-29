const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const practicionerSchema = new Schema({
  name: { type: String, required: true },
  specialties: { type: String, required: true },
  skills: { type: String, required: true },
  fees: { type: Number, required: true },
  bio: { type: String},
  entrydate: { type: Date, default: Date.now },
  exitdate: { type: Date},
});

const Practicioner = mongoose.model("Practicioner", practicionerSchema);

module.exports = Practicioner;
