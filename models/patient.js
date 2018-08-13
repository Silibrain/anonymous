const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  name:{ 
    type: String,
    required: "Name is required",
    trim: true 
  },
  gender:{ 
    type: String,
    trim: true 
  },
  personalhistory:{ 
    type: String,
    trim: true 
  },
  familyhistory:{ 
    type: String,
    trim: true 
  },
  signs:{ 
    type: String,
    trim: true 
  },
  location:{ 
    type: String,
    trim: true 
  },
  travels:{ 
    type: String,
    trim: true 
  },
  age:{ 
    type: String,
    trim: true 
  },
  weight:{ 
    type: String,
    trim: true
  },
  height:{ 
    type: String,
    trim: true 
  },
  tempcurr:{ 
    type: String, 
    trim: true
  },
  heartrate:{ 
    type: String,
    trim: true 
  },
  respiratoryrate:{ 
    type: String,
    trim: true 
  },
  bloodpressure:{ 
    type: String,
    trim: true 
  },
  oxygensaturation:{ 
    type: String,
    trim: true 
  },
  sodium:{ 
    type: String,
    trim: true 
  },
  potassium:{ 
    type: String,
    trim: true 
  },
  chlorine:{ 
    type: String,
    trim: true 
  },
  bicarb:{ 
    type: String,
    trim: true 
  },
  bun:{ 
    type: String,
    trim: true 
  },
  platelets:{ 
    type: String,
    trim: true 
  },
  creatinine:{ 
    type: String,
    trim: true 
  },
  wbc:{ 
    type: String,
    trim: true 
  },
  hct:{ 
    type: String,
    trim: true 
  },
  hepatic:{ 
    type: String,
    trim: true 
  },
  kidney:{ 
    type: String,
    trim: true 
  },
  lipids:{ 
    type: String,
    trim: true 
  },
  specials:{ 
    type: String,
    trim: true 
  },
  glucose:{ 
    type: String,
    trim: true 
  },
  findings:{ 
    type: String,
    trim: true 
  },
  xray:{ 
    type: String,
    trim: true 
  },
  ctscan:{ 
    type: String,
    trim: true 
  },
  mri:{ 
    type: String,
    trim: true 
  },
  ultrasound:{ 
    type: String,
    trim: true 
  },
  pet:{ 
    type: String,
    trim: true 
  },
  symptoms:{ 
    type: String,
    trim: true 
  },
  diagnosis:{ 
    type: String,
    trim: true
  },
  daysintreatment:{ 
    type: String,
    trim: true
  }
  ,
  drugsintreatment:{ 
    type: String,
    trim: true
  }
  ,
  proceduresintreatment:{ 
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Patient", patientSchema);
