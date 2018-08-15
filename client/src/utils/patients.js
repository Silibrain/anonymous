// ## Tweet Controller
const createPagination = require('./analytics').createPagination;
const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');
const user = mongoose.model('User');
const Analytics = mongoose.model('Analytics');
const _ = require('underscore');
const logger = require('./logger');

exports.patient = (req, res, next, id) => {
  Patient.load(id, (err, patient) => {
    if (err) {
      return next(err);
    }
    if (!patient) {
      return next(new Error('Failed to load patient' + id));
    }
    req.patient = patient;
    next();
  });
};

// ### Create a Patient
exports.create = (req, res) => {
  const Patient = new Patient(req.body);
  Patient.user = req.user;
  Patient.uploadAndSave({}, err => {
    if (err) {
      res.render('pages/500', {error: err});
    } else {
      res.redirect('/');
    }
  });
};

// ### Update a patient
exports.update = (req, res) => {
  let patient = req.patient;
  patient = _.extend(patient, {'body': req.body.patient});
  patient.uploadAndSave({}, (err) => {
    if (err) {
      return res.render('pages/500', {error: err});
    }
    res.redirect('/');
  });
};

// ### Delete a patient
exports.destroy = (req, res) => {
  const patient = req.patient;
  patient.remove(err => {
    if (err) {
      return res.render('pages/500');
    }
    res.redirect('/');
  });
};

exports.index = (req, res) => {
  const page = (req.query.page > 0 ? req.query.page : 1) - 1;
  const perPage = 10;
  const options = {
    perPage: perPage,
    page: page
  };
  let followingCount = req.user.following.length;
  let followerCount = req.user.followers.length;
  let patients, patientCount, pageViews, analytics, pagination;
  user.countuserPatients(req.user._id).then(result => {
    patientCount = result;
  });
  Patient.list(options)
    .then(result => {
      patients = result;
      return Patient.countTotalPatients();
    })
    .then(result => {
      pageViews = result;
      pagination = createPagination(req, Math.ceil(pageViews/ perPage),  page+1);
      return Analytics.list({ perPage: 15 });
    })
    .then(result => {
      analytics = result;
      res.render('pages/index', {
        title: 'List of Patients',
        patients: patients,
        analytics: analytics,
        page: page + 1,
        patientCount: patientCount,
        pagination: pagination,
        followerCount: followerCount,
        followingCount: followingCount,
        pages: Math.ceil(pageViews / perPage),
      });
    })
    .catch(error => {
      logger.error(error);
      res.render('pages/500');
    });
};
