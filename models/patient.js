const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  temperature: { type: Number, required: true },
  pulse: { type: Number, required: true },
  respiratoryrate: { type: Number, required: true },
  pressure: { type: Number, required: true },
  symptoms: { type: String, required: true },
  diagnosis: { type: String},
  drugs: { type: String},
  checkindate: { type: Date, default: Date.now },
  checkoutdate: { type: Date},
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
