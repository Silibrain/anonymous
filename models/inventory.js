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
  firstyear: { 
    type: Number 
  },
  lastyear: { 
    type: Number
  },
  expiryyear:{ 
    type: Number
  }
});

module.exports = mongoose.model("Inventory", inventorySchema);
