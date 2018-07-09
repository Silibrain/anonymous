const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user.js");

router.get("./user", (req, res) => {
  if (req.isAuthenticated()) {
    const currentUser = req.session.passport.user;
    // Call DB, find currentUser by id
    // Get email
    console.log("Found Current User", currentUser);
    User.findOne({ _id: currentUser }).then(dbUser => {
      const user = {
        loggedIn: true,
        userName: dbUser.userName,
        email: dbUser.email
      };
      console.log("Get User id", user);
      res.json(user);
    });
  } else {
    const user = {
      loggedIn: false,
      userName: "",
      email: ""
    };
    res.json(user);
  }
});

// Local Auth Register New User
router.post("registerUser", (req, res, next) => {
  passport.authenticate("local-signup", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }

    if (!user) {
      console.log("not a user");
      return res.redirect("/");
    }

    req.login(user, err => {
      if (err) {
        console.log("Error with Local auth");
        return next(err);
      } else {
        res.cookie("userName", req.user.userName);
        res.cookie("email", req.body.email);
        res.cookie("user_id", req.user.id);
        console.log("confirm");
        return res.redirect("/");
      }
    });
  })(req, res, next);
});

// Local Auth Sign In User
router.post("/signin", (req, res, next) => {
  passport.authenticate("local-signin", (err, user, info) => {
    if (err) {
      console.log("Get User id", err);
      return next(err);
    }
    if (!user) {
      console.log("not a user");
      req.flash("notify", "Please register.");
      return res.redirect("/");
    }

    req.login(user, err => {
      if (err) {
        return next(err);
      }

      res.cookie("userName", user[0].userName);
      res.cookie("email", user[0].email);
      res.cookie("user_id", user[0]._id);
      const userAuth2 = { username: user[0].userName, email: user[0].email };

      // Redirect
      return res.json(userAuth2);
    });
  })(req, res, next);
});

router.get("/logout", function(req, res) {
  console.log("You've just logged out.");
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie("user_id");
    res.clearCookie("userName");
    res.clearCookie("email");
    res.clearCookie("connect.sid");
    res.clearCookie("/");
    console.log("Sign in");
  });
});

// Google Authentication
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// Google Authentication Callback
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.cookie("user_id", req.user.dataValues.id);
  res.cookie("user_name", req.user.dataValues.userName);
  return res.redirect("/");
});

module.exports = router;
