const mongoose = require('mongoose');
const Activity = mongoose.model('activity');

exports.index = (req, res) => {
  let activities;
  let options = {};
  Activity.list(options)
    .then( result => {
      activities = result;
      return res.render('pages/activity', {
        activities: activities
      });
    });
};