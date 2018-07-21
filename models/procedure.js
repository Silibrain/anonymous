const mongoose = require("mongoose");

const procedureSchema = mongoose.Schema({
  id: {
    type: String
  },
  name: { 
    type: String 
  },
  type: { 
    type: String 
  },
  location: { 
    type: String 
  },
  result: { 
    type: String
  },
  avgtime: { 
    type: String 
  },
  capex: { 
    type: String 
  },
  opex: { 
    type: String 
  } 
});

module.exports = mongoose.model("Procedure", procedureSchema);



