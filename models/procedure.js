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
    type: Number 
  },
  capex: { 
    type: Number 
  },
  opex: { 
    type: Number 
  } ,
  firstyear: { 
    type: Number 
  },
  lastyear: { 
    type: Number
  }
});

module.exports = mongoose.model("Procedure", procedureSchema);



