const mongoose = require("mongoose");

const practicionerSchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String,
    required: true,
    trim: true
  },
  specialties:{ 
    type: String,
    required: true,
    trim: true 
  },
  skills:{ 
    type: String,
    required: true,
    trim: true 
  },
  fees:{ 
    type: Number,
    required: true,
    trim: true 
  },
  bio:{ 
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Practicioner", practicionerSchema);







