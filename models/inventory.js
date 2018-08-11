const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String, 
    required: true,
    trim: true
  },
  units:{ 
    type: Number,
    required: true,
    trim: true
  },
  unitcost:{ 
    type: Number,
    required: true,
    trim: true 
  },
  type:{ 
    type: String,
    required: false,
    trim: true
  },
  expiryyear:{ 
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model("Inventory", inventorySchema);
