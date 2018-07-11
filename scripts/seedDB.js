const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hippocrates",
  {
    useMongoClient: true
  }
);


/////practicioners///////
db.createCollection( "practicioners",
{"id":1, "name":"Connor" , "specialties":"Nuero Suergon" , "skills":"steady hands", "fees":100, "bio":"nothing about something", "entrydate":05/20/2018 , "exitdate":07/20/2018 , },
{"name":"Roberto" , "specialties":"Pediatrics" , "skills":"doctor", "fees":200 , "bio":"loren ipsum ipsum lipsum", "entrydate":05/20/2018 , "exitdate":07/20/2018 , },
{"name":"Alex" , "specialties":"pharmacist" , "skills":"medicine", "fees":300 , "bio":"bio bio bio bio bio", "entrydate":05/20/2018 , "exitdate":07/20/2018 , },
{"name":"Junior" , "specialties":"Doctor" , "skills":"Doctor", "fees":500 , "bio":"doctor bio about bio doctor", "entrydate":05/20/2018 , "exitdate":07/20/2018 , },
)


db.createCollection( "patients", 
{"id":1, "name":"janet" , "age":24 , "weight":124 , "height":6 , "temperature":90, "pulse":80, "respiratoryrate":1, "pressure":5, "symptoms":"flu", "diagnosis":"sick", "drugs":"advil", "checkindate":12/20/2017, "checkoutdate":12/21/2017, },
{"name":"John" , "age":25 , "weight":125 , "height":5 , "temperature":90, "pulse":80, "respiratoryrate":2, "pressure":4, "symptoms":"cold", "diagnosis":"sick", "drugs":"tylenol", "checkindate":10/20/2017, "checkoutdate":10/21/2017, },
{"name":"Juan", "age":26 , "weight":126 , "height":4 , "temperature":90, "pulse":80, "respiratoryrate":3, "pressure":3, "symptoms":"cough", "diagnosis":"sick", "drugs":"nyquil", "checkindate":07/04/2018, "checkoutdate":07/05/2018, },
{"name":"Jane" , "age":27 , "weight":127 , "height":3 , "temperature":90, "pulse":80, "respiratoryrate":4, "pressure":2, "symptoms":"inflammation", "diagnosis":"sick", "drugs":"dayquil", "checkindate":06/08/2018, "checkoutdate":06/09/2018, }

)






