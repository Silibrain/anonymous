const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String,
    required: true,
    trim: true 
  },
  age:{ 
    type: Number,
    required: true,
    trim: true 
  },
  weight:{ 
    type: Number,
    required: true,
    trim: true
  },
  height:{ 
    type: Number,
    required: true,
    trim: true 
  },
  temperature:{ 
    type: Number, 
    required: true,
    trim: true
  },
  pulse:{ 
    type: Number,
    required: true,
    trim: true 
  },
  respiratoryrate:{ 
    type: Number,
    required: true,
    trim: true 
  },
  pressure:{ 
    type: String,
    required: true,
    trim: true 
  },
  symptoms:{ 
    type: String,
    required: true,
    trim: true 
  },
  diagnosis:{ 
    type: String,
    required: true,
    trim: true
  },
  drugs:{ 
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Patient", patientSchema);
