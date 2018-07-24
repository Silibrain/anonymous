const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const axios = require("axios");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes")
const bluebird = require('bluebird');
const MONGODB_URI = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 1992;

// configuration ===============================================================

require("./config/passport")(passport); // pass passport for configuration

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  //access-control-allow-origin http://localhost:3000
  res.header("Access-Control-Allow-Origin", "http://localhost:1992");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// set up our express application
app.use(morgan("dev")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
app.use(
  session({
    key: "user_sid",
    resave: true,
    secret: "IMomsAusXH33TGSF0vAfNMjuu0VPHjpfVBpb",
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
require("./routes/routes.js")(app, passport, axios);
// require("./routes/index.js")(app, passport, axios); // load our routes and pass in our app and fully configured passport


// mongoDB connection =========================================================
// Set up promises with mongoose
app.use(routes);
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hippocrates",
  { promiseLibrary: bluebird }
);

// launch ======================================================================
// Start the API server
app.listen(PORT, function() {
  console.log(`👨‍💻 ✅ -> 💻 🏃‍♂️ ♀ @ ⚓️  = ${PORT}`);
});
