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
    type: String 
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
    type: String 
  },
  symptoms:{ 
    type: String 
  },
  diagnosis:{ 
    type: String
  },
  drugs:{ 
    type: String
  }
});

module.exports = mongoose.model("Patient", patientSchema);
