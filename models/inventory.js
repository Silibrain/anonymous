const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String 
  },
  units:{ 
    type: String 
  },
  unitcost:{ 
    type: String 
  },
  type:{ 
    type: String 
  },
  expiryyear:{ 
    type: String
  }
});

module.exports = mongoose.model("Inventory", inventorySchema);
