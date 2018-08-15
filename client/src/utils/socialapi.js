// ## Patient Controller
const mongoose = require('mongoose');
const Patient = mongoose.model('patient');
const user = mongoose.model('user');

exports.patientList = (req, res) => {
  const page = (req.query.page > 0 ? req.query.page : 1) - 1;
  const perPage = 15;
  const options = {
    perPage: perPage,
    page: page
  };
  let patients, count;
  Patient.limitedList(options)
    .then( result => {
      patients = result;
      return Patient.count();
    })
    .then( result => {
      count = result;
      return res.send(patients);
    })
    .catch(error => {
      return res.render('pages/500', { errors: error.errors });
    });
};

exports.usersList = (req, res) => {
  const page = (req.query.page > 0 ? req.query.page : 1) - 1;
  const perPage = 15;
  const options = {
    perPage: perPage,
    page: page
  };
  let users, count;
  user.list(options)
    .then( result => {
      users = result;
      return user.count();
    })
    .then( result => {
      count = result;
      return res.send(users);
    })
    .catch(error => {
      return res.render('pages/500', { errors: error.errors });
    });
};
