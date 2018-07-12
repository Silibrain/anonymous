const mongoose = require("mongoose");

const practicionerSchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String
  },
  specialties:{ 
    type: String 
  },
  skills:{ 
    type: String 
  },
  fees:{ 
    type: String 
  },
  bio:{ 
    type: String
  },
  firstyear: { 
    type: Number 
  },
  lastyear: { 
    type: Number
  }
});

module.exports = mongoose.model("Practicioner", practicionerSchema);







