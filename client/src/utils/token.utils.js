// import axios from "axios";

// const setAuthToken = token => {
//   if (token) {
//     // Apply to every request
//     axios.defaults.headers.common["Authorization"] = token;
//   } else {
//     // Delete auth header
//     delete axios.defaults.headers.common["Authorization"];
//   }
// };

// export default setAuthToken;

const createToken = function(auth) {
  return jwt.sign(
    {
      id: auth.id
    },
    "my-secret",
    {
      expiresIn: 60 * 120
    }
  );
};

module.exports = {
  generateToken: function(req, res, next) {
    req.token = createToken(req.auth);
    return next();
  },
  sendToken: function(req, res) {
    res.setHeader("x-auth-token", req.token);
    return res.status(200).send(JSON.stringify(req.user));
  }
};
