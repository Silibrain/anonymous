const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
LocalStrategy = require("passport-local").Strategy;
const flash = require("express-flash-messages");
const Validator = require(validator);
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 1992;

const db = require("./models");
require("./config/passport")(passport); //pass passport for configuration
// body-parser for AJAX
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine("", ({ : ""}));
// app.set("", "");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(
  session({
    key: "user_sid",
    secret: "mM6MNDxu8WUrLwUZuj6cwQwGg",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
      httpOnly: false
    }
  })
);

app.use(cookieParser());
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash());
app.use(Validator());

// require("./controllers/...")();

require("./controllers/inventoryController")(app, passport);
require("./controllers/patientsController")(app, passport);
require("./controllers/practicionersController")(app, passport);
require("./controllers/proceduresController")(app, passport);
require("./controllers/staffController")(app, passport);
require("./routes/administrators")(app, passport);

require("./routes/index")(app, passport);
require("./routes/inventories")(app, passport);
require("./routes/patients")(app, passport);
require("./routes/practicioners")(app, passport);
require("./routes/procedures")(app, passport);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hippocrates");

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Start the API server
app.listen(PORT, function() {
  console.log(`👨‍💻 ✅ -> 💻 🏃‍♂️ ♀ @ ⚓️  = ${PORT}`);
});
