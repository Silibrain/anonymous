
const Staff = require("../models/staff");
const Practicioner = require("../models/practicioner");
const Patient = require("../models/patient");
const Inventory = require("../models/inventory");
const Procedure = require("../models/procedure");
const User = require("../models/user");

module.exports = (app, passport) => {
  // =====================================
  // Read Only Pro team library  ========
  // =====================================
  app.post("/pro/create", (req, res) => {
    Pro.create(req.body).then(response => {
      res.send("created");
    });
  });
  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get("/", (req, res) => {
    window.location = '/'; // load the index.ejs file
  });

  // =====================================
  // User Account Endpoints (CRUD)  ========
  // =====================================
  app.get("/user/id", (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.session.passport.user);
    }
  });

  app.get("/user/account", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(user => {
        var userDate = {
          email: user.email,
          name: user.name,
          title: user.title,
          role: user.role,
          phone: user.phone,
          bio: user.bio
        };
        // console.log("\n$$$$$$$",user)
        // console.log("%%%%%%%%%",userDate)
        res.send(userDate);
      });
    }
  });

  app.put("/user/update", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;

      User.findOneAndUpdate(
        { _id: userId },
        {
            email: user.email,
            name: user.name,
            title: user.title,
            role: user.role,
            phone: user.phone,
            bio: user.bio
        }
      ).then(user => {
        console.log("\n#######", user);
        res.send(true);
      });
    }
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form

  app.post(
    "/signin",
    passport.authenticate("local-login", {
      successRedirect: window.location = '/menu', // redirect to the secure profile section
      failureRedirect: window.location = '/signin', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get("/signup", (req, res) => {
    // render the page and pass in any flash data if it exists
    res.render("signup", { message: req.flash("signupMessage") });
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: window.location = '/menu', // redirect to the secure profile section
      failureRedirect: window.location = '/signup', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get("/menu", isLoggedIn, (req, res) => {
      window.location = '/menu', {
      user: req.user // get the user out of session and pass to template
    };
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get("/logout", (req, res) => {
    req.session.destroy(err => {
      req.logout();
      res.clearCookie("user_sid");
      res.json(true);
    });
  });
};

// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  window.location = '/'
};