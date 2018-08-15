// ### Create Favorite
exports.create = (req, res) => {
    const patient = req.patient;
    patient._favorites = req.user;
    patient.save(err => {
      if (err) {
        return res.send(400);
      }
      res.send(201, {});
    });
  };
  
  // ### Delete Favorite
  exports.destroy = (req, res) => {
    const patient = req.patient;
  
    patient._favorites = req.user;
    patient.save(err => {
      if (err) {
        return res.send(400);
      }
      res.send(200);
    });
  };
  