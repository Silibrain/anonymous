const Practicioner = require("../models/practicioner");
const Patient = require("../models/patient");
const Inventory = require("../models/inventory");
const Procedure = require("../models/procedure");
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

  //api/inventories

  app.get("/inventory", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Inventory.find(req.query)
        .sort({ date: -1 }).then(dbModel =>
          res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
    }
  });

  app.delete("/inventory/:id", (req,res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Inventory.findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });
    }
  });

  app.post("/inventory", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        const drugData = {
          name: req.body.name,
          units: req.body.units,
          unitcost: req.body.unitcost,
          type: req.body.type,
          expiryyear: req.body.expiryyear
        };

        Inventory.create(drugData).then(() => {
          sendNotification();
          res.json(true);
        })
      });
    }
  })

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
          age: req.body.age,
          weight: req.body.weight,
          height: req.body.height,
          temperature: req.body.temperature,
          pulse: req.body.pulse,
          respiratoryrate: req.body.respiratoryrate,
          pressure: req.body.pressure,
          symptoms: req.body.symptoms,
          diagnosis: req.body.diagnosis,
          drugs: req.body.drugs
        };
        Patient.create(patientData).then(() => {
          sendNotification();
          res.json(true);
        })
      });
    }
  })

  //api/practicioners

  app.get("/practicioner", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Practicioner.find(req.query)
        .sort({ date: -1 }).then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
    }
  });

  app.delete("/practicioner/:id", (req,res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Practicioner.findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });
    }
  });

  app.post("/practicioner", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        const practicionerData = {
          name: req.body.name,
          specialties: req.body.specialties,
          skills: req.body.skills,
          fees: req.body.fees,
          bio: req.body.bio
        };
        Practicioner.create(practicionerData).then(() => {
          sendNotification();
          res.json(true);
        }).catch(err => res.status(422).json(err));
      });
    }
  })


  //api/procedures

  app.get("/procedure", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Procedure.find(req.query)
        .sort({ date: -1 }).then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
    }
  });

  app.delete("/procedure/:id", (req,res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        Procedure.findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });
    }
  });

  app.post("/procedure", (req, res) => {
    if (req.isAuthenticated()) {
      const userId = req.session.passport.user;
      User.findOne({ _id: userId }).then(() => {
        const procedureData = {
          name: req.body.name,
          type: req.body.type,
          location: req.body.location,
          result: req.body.result,
          avgtime: req.body.avgtime,
          capex: req.body.capex,
          opex: req.body.opex
        };
        Procedure.create(procedureData).then(() => {
          sendNotification();
          res.json(true);
        }).catch(err => res.status(422).json(err));
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
