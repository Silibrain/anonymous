const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const axios = require("axios");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

const MONGODB_URI = require("./config/keys");


// configuration ===============================================================

require("./config/passport")(passport); // pass passport for configuration

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  //access-control-allow-origin http://localhost:3000
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Serve up static assets
app.use(express.static("client/build"));

// set up our express application
app.use(morgan("dev")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(
  session({
    key: "user_sid",
    resave: true,
    secret: "mM6MNDxu8WUrLwUZuj6cwQwGg",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
      httpOnly: false
    }
  })
);

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require("./routes/index.js")(app, passport, axios); // load our routes and pass in our app and fully configured passport
require("./routes/api/administrators.js")(app, passport, axios);
require("./routes/api/auth.js")(app, passport, axios);
require("./routes/api/index.js")(app, passport, axios);
require("./routes/api/inventories.js")(app, passport, axios);
require("./routes/api/patients.js")(app, passport, axios);
require("./routes/api/practicioners.js")(app, passport, axios);
require("./routes/api/procedures.js")(app, passport, axios);

// mongoDB connection =========================================================
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  MONGODB_URI || "mongodb://localhost/hippocrates",
  {
    useMongoClient: true
  }
);

// launch ======================================================================
// Start the API server
app.listen(PORT, function() {
  console.log(`👨‍💻 ✅ -> 💻 🏃‍♂️ ♀ @ ⚓️  = ${PORT}`);
});
