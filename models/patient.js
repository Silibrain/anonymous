const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  id:{
    type: String
  },
  name:{ 
    type: String 
  },
  age:{ 
    type: String 
  },
  weight:{ 
    type: String 
  },
  height:{ 
    type: String 
  },
  temperature:{ 
    type: String 
  },
  pulse:{ 
    type: String 
  },
  respiratoryrate:{ 
    type: String 
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
