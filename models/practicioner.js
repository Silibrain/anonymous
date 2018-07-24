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
  }
});

module.exports = mongoose.model("Practicioner", practicionerSchema);







