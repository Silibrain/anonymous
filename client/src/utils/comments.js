//@ts-check
const utils = require('./utils.js');
const mongoose = require('mongoose');
const Activity = mongoose.model('activity');
const logger = require('./logger.js');

exports.load = (req, res, next, id) => {
  const patient = req.patient;
  utils.findByParam(patient.comments, { id: id }, (err, comment) => {
    if (err) {
      return next(err);
    }
    req.comment = comment;
    next();
  });
};

// ### Create Comment
exports.create = (req, res) => {
  const patient = req.patient;
  const user = req.user;

  if (!req.body.body) {
    return res.redirect('/');
  }
  patient.addComment(user, req.body, err => {
    if (err) {
      logger.error(err);
      return res.render('pages/500');
    }
    const activity = new Activity({
      activityStream: 'added a comment',
      activityKey: patient.id,
      sender: user,
      receiver: req.patient.user,
    });
    logger.info(activity);
    activity.save((err) => {
      if (err) {
        logger.error(err);
        return res.render('pages/500');
      }
    });
    res.redirect('/');
  });
};

// ### Delete Comment
exports.destroy = (req, res) => {
  // delete a comment here.
  const comment = req.comment;
  comment.remove(err => {
    if (err) {
      res.send(400);
    }
    res.send(200);
  });
};
