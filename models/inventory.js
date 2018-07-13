const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String 
  },
  units:{ 
    type: Number 
  },
  unitcost:{ 
    type: Number 
  },
  type:{ 
    type: String 
  },
  expiryyear:{ 
    type: Number
  }
});

module.exports = mongoose.model("Inventory", inventorySchema);
