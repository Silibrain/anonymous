const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String 
  },
  age:{ 
    type: Number 
  },
  weight:{ 
    type: Number 
  },
  height:{ 
    type: Number 
  },
  temperature:{ 
    type: Number 
  },
  pulse:{ 
    type: Number 
  },
  respiratoryrate:{ 
    type: Number 
  },
  pressure:{ 
    type: Number 
  },
  symptoms:{ 
    type: String 
  },
  diagnosis:{ 
    type: String
  },
  drugs:{ 
    type: String
  },
  firstyear: { 
    type: Number 
  },
  lastyear: { 
    type: Number
  }
});

module.exports = mongoose.model("Patient", patientSchema);
