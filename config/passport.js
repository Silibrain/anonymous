require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const User = require("../models/user");
const keys = require("../config/keys");
const keysProd = require("../config/keys_prod");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
