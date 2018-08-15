const Patient = require("../models/patient");
const User = require("../models/user");

module.exports = (app, passport) => {
  //Create Case Routes & Functionality to Tie Doctors, Patients, Inventory, Procedures

  app.get("/", (req, res) => {
    res.render("/"); // load the index.ejs file
  });


  //api/Administrators & Controller(User Functionality)

  app.get("/user/id", (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.session.passport.user);
    }
  });

  app.get("/user/account", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(user => {
        var userInfo = {
          name: user.name,
          email: user.email,
          password: user.password,
          phone: user.phone,
          title: user.title,
          bio: user.bio,
          role: user.role
        };
        res.send(userInfo);
      });
    }
  });

  app.put("/user/update", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOneAndUpdate(
        { _id: userId },
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          title: req.body.title,
          bio: req.body.bio,
          role: req.body.role
        }
      ).then(user => {
        console.log("\n#######", user);
        res.send(true);
      });
    }
  });

  //api/patients

  app.get("/patient", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Patient.find(req.query)
        .sort({ date: -1 }).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });
    }
  });

  app.delete("/patient/:id", (req,res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Patient.findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });
    }
  });

  app.post("/patient", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      console.log("hello save patient route")
      User.findOne({ _id: userId }).then(() => {
        const patientData = {
          name: req.body.name,
          gender: req.body.gender,
          personalhistory: req.body.personalhistory,
          familyhistory: req.body.familyhistory,
          signs: req.body.signs,
          location: req.body.location,
          travels: req.body.travels,
          age: req.body.age,
          weight: req.body.weight,
          height: req.body.height,
          tempcurr: req.body.tempcurr,
          heartrate: req.body.heartrate,
          respiratoryrate: req.body.respiratoryrate,
          bloodpressure: req.body.bloodpressure,
          oxygensaturation: req.body.oxygensaturation,
          sodium: req.body.sodium,
          potassium: req.body.potassium,
          chlorine: req.body.chlorine,
          bicarb: req.body.bicarb,
          bun: req.body.bun,
          platelets: req.body.platelets,
          creatinine: req.body.creatinine,
          wbc: req.body.wbc,
          hct: req.body.hct,
          hepatic: req.body.hepatic,
          kidney: req.body.kidney,
          lipids: req.body.lipids,
          specials: req.body.specials,
          glucose: req.body.glucose,
          findings: req.body.findings,
          xray: req.body.xray,
          ctscan: req.body.ctscan,
          mri: req.body.mri,
          ultrasound: req.body.ultrasound,
          pet: req.body.pet,
          symptoms: req.body.symptoms,
          diagnosis: req.body.diagnosis,
          daysintreatment: req.body.daysintreatment,
          drugsintreatment: req.body.drugsintreatment,
          proceduresintreatment: req.body.proceduresintreatment
        };
        Patient.create(patientData).then(() => {
          sendNotification();
          res.json(true);
        })
      });
    }
  })

  //Check LogIn or Not 

  app.get("/isloggedin", (req, res) => {
    if (req.user === undefined || !req.user) {
      //console.log("user", req.user)
      console.log("session", req.isAuthenticated());
      res.json({ status: false, user: req.user });
    } else {
      console.log("user", req.user)
      console.log("session",req.isAuthenticated())
      res.json({ status: true, user: req.user });
    }
  });

  //Login

  // show the login form
  app.get("/signin", (req, res) => {
    // render the page and pass in any flash data if it exists
    res.redirect("/signin", {
      message: req.flash("loginMessage")
    });
  });

  // process the login form
  app.post(
    "/signin",
    passport.authenticate("local-login", {
      successRedirect: "/home", // redirect to the secure profile section
      failureRedirect: "/signin", // redirect back to the signup page if there is an error
      failureFlash: false// allow flash messages
    })
  );

  //SignUp

  // show the signup form
  app.get("/signup", (req, res) => {
    // render the page and pass in any flash data if it exists
    res.render("signup", { message: req.flash("signupMessage") });
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/home", // redirect to the secure profile section
      failureRedirect: "/signup", // redirect back to the signup page if there is an error
      failureFlash: false // allow flash messages
    })
  );

  //ProfileSelect

  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get("/menu", isLoggedIn, (req, res) => {
    res.redirect("/menu"), {
      user: req.user // get the user out of session and pass to template
    };
  });

  //LogOut

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
  res.redirect("/");
};
