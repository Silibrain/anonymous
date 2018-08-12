const mongoose = require("mongoose");

const procedureSchema = mongoose.Schema({
  id: {
    type: String
  },
  name: { 
    type: String,
    required: true,
    trim: true 
  },
  type: { 
    type: String,
    required: true,
    trim: true 
  },
  location: { 
    type: String,
    required: true,
    trim: true 
  },
  result: { 
    type: String,
    required: true,
    trim: true
  },
  avgtime: { 
    type: Number,
    required: true,
    trim: true 
  },
  capex: { 
    type: Number,
    required: true,
    trim: true 
  },
  opex: { 
    type: Number,
    required: true,
    trim: true 
  } 
});

module.exports = mongoose.model("Procedure", procedureSchema);



