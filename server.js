const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const cookiePrser = require("cookie-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 1992;

const db = require("./models");
require("./config/passport")(passport); //pass passport for configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine("", ({ : ""}));
// app.set("", "");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    key: "user_sid",
    secret: "mM6MNDxu8WUrLwUZuj6cwQwGg",
    reseave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash());

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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hippocrates");

// Start the API server
app.listen(PORT, function() {
  console.log(`👨‍💻 ✅ -> 💻 🏃‍♂️ ♀ @ ⚓️  = ${PORT}`);
});
