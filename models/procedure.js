const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const procedureSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  result: { type: String},
  avgtime: { type: Number, required: true },
  capex: { type: Number, required: true },
  opex: { type: Number, required: true} ,
  entrydate: { type: Date, default: Date.now },
  exitdate: { type: Date}
});

const Procedure = mongoose.model("Procedure", procedureSchema);

module.exports = Procedure;
