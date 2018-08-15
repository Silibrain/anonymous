const Mongoose = require('mongoose');
const Patient = Mongoose.model('Patient');
const user = Mongoose.model('User');
const Analytics = Mongoose.model('Analytics');
const logger = require('./logger');

exports.signin = (req, res) => {};

exports.authCallback = (req, res) => {
  res.redirect('/');
};

exports.login = (req, res) => {
  let patientCount, userCount, analyticsCount;
  let options = {};
  Analytics.list(options)
    .then(() => {
      return Analytics.count();
    })
    .then(result => {
      analyticsCount = result;
      return Patient.countTotalPatients();
    })
    .then(result => {
      patientCount = result;
      return user.countTotalusers();
    })
    .then(result => {
      userCount = result;
      logger.info(patientCount);
      logger.info(userCount);
      logger.info(patientCount);
      res.render('pages/login', {
        title: 'Login',
        message: req.flash('error'),
        userCount: userCount,
        patientCount: patientCount,
        analyticsCount: analyticsCount,
      });
    });
};

exports.signup = (req, res) => {
  res.render('pages/login', {
    title: 'Sign up',
    user: new user()
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};

exports.session = (req, res) => {
  res.redirect('/');
};

exports.create = (req, res, next) => {
  const user = new user(req.body);
  user.provider = 'local';
  user.save()
    .catch(error => {
      return res.render('pages/login', { errors: error.errors, user: user });
    })
    .then(() => {
      return req.login(user);
    })
    .then(() => {
      return res.redirect('/');
    })
    .catch(error => {
      return next(error);
    });
};

exports.list = (req, res) => {
  const page = (req.query.page > 0 ? req.query.page : 1) - 1;
  const perPage = 5;
  const options = {
    perPage: perPage,
    page: page,
    criteria: {github: { $exists: true}},
  };
  let users, count;
  user.list(options)
    .then( result => {
      users = result;
      return user.count();
    })
    .then( result => {
      count = result;
      res.render('pages/user-list', {
        title: 'List of users',
        users: users,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    })
    .catch(error => {
      return res.render('pages/500',  { errors: error.errors });
    });
};

exports.show = (req, res) => {
  const user = req.profile;
  const requserId = user._id;
  const userId = requserId.toString();
  const page = (req.query.page > 0 ? req.query.page : 1) - 1;
  const options = {
    perPage: 100,
    page: page,
    criteria: { user: userId }
  };
  let patients, patientCount;
  let followingCount = user.following.length;
  let followerCount = user.followers.length;

  Patient.list(options)
    .then( result => {
      patients = result;
      return Patient.countuserPatients(requserId);
    })
    .then( result => {
      patientCount = result;
      res.render('pages/profile', {
        title: 'Tweets from ' + user.name,
        user: user,
        patients: patients,
        patientCount: patientCount,
        followerCount: followerCount,
        followingCount: followingCount
      });
    })
    .catch(error => {
      return res.render('pages/500',  { errors: error.errors });
    });
};

exports.user = (req, res, next, id) => {
  user.findOne({ _id: id }).exec((err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(new Error('failed to load user ' + id));
    }
    req.profile = user;
    next();
  });
};

exports.showFollowers = (req, res) => {
  showFollowers(req, res, 'followers');
};

exports.showFollowing = (req, res) => {
  showFollowers(req, res, 'following');
};

function showFollowers(req, res, type) {
  let user = req.profile;
  let followers = user[type];
  let patientCount;
  let followingCount = user.following.length;
  let followerCount = user.followers.length;
  let userFollowers = user.find({ _id: { $in: followers } }).populate(
    'user',
    '_id name username github'
  );

  Patient.countuserPatients(user._id)
    .then( result => {
      patientCount = result;
      userFollowers.exec((err, users) => {
        if (err) {
          return res.render('pages/500');
        }
        res.render('pages/followers', {
          user: user,
          followers: users,
          patientCount: patientCount,
          followerCount: followerCount,
          followingCount: followingCount
        });
      });
    });
}

