const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: { type: String, required: true },
  units: { type: Number, required: true },
  type: { type: String, required: true },
  entrydate: { type: Date, default: Date.now },
  expirydate: { type: Date},
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
