import axios from "axios";

export default {
  getStatus: function(t) {
    return axios
      .get("/isloggedin")
      .then(response => {
        // console.log("%%%%%%",response);
        // console.log("$$$$", response.data.status);
        t.setState({
          status: response.data.status
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getUserId: function(t) {
    return axios.get("/user/id").then(userId => {
      console.log("userid", userId);
      t.setState({
        currentUser: userId.data
      });
    });
  },

  getAccountData: function(t) {
    return axios
      .get("/user/account")
      .then(response => {
        if (response.data.email) {
          let userObj = t.state.user;
          userObj.email = response.data.email;
          userObj.name = response.data.name;
          userObj.phone = response.data.phone;
          userObj.roleandinstitution = response.data.roleandinstitution;
          userObj.bio = response.data.bio;
          userObj.degreeandalmamater = response.data.degreeandalmamater;
          userObj.picturelink = response.data.picturelink;

          t.setState({
            loadingAccount: false,
            user: userObj
          });

          if (!t.state.loadingAccount) {
            t.setState({
              loading: false
            });
          }
        } 
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  updateAccountData: function(t) {
    const userData = t.state.user;
   return axios
      .put("/user/update", userData, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        if (response) this.getAccountData(t);
        alert("Account Updated!");
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getPatients: function() {
   return axios
      .get("/patient")
  },

  deletePatient: function(id){
    return axios.delete("/patient/"+id)
  },

  savePatient: function(t) {
    const patientData = t.state;
    console.log(patientData,'API')
    return axios
      .post("/patient", patientData)
      .then(request => {
        if (request.data.name) {
          let patientObj = t.state.patient;
          patientObj.name = request.data.name;
          patientObj.gender = request.data.gender;
          patientObj.personalhistory = request.data.personalhistory;
          patientObj.familyhistory = request.data.familyhistory;
          patientObj.signs = request.data.signs;
          patientObj.location = request.data.location;
          patientObj.travels = request.data.travels;
          patientObj.age = request.data.age;
          patientObj.weight = request.data.weight;
          patientObj.height = request.data.height;
          patientObj.tempcurr = request.data.tempcurr;
          patientObj.heartrate = request.data.heartrate;
          patientObj.respiratoryrate = request.data.respiratoryrate;
          patientObj.bloodpressure = request.data.bloodpressure;
          patientObj.oxygensaturation = request.data.oxygensaturation;
          patientObj.findings = request.data.findings;
          patientObj.symptoms = request.data.symptoms;
          patientObj.sodium = request.data.sodium;
          patientObj.potassium = request.data.potassium;
          patientObj.chlorine = request.data.chlorine;
          patientObj.bicarb = request.data.bicarb;
          patientObj.bun = request.data.bun;
          patientObj.platelets = request.data.platelets;
          patientObj.creatinine = request.data.creatinine;
          patientObj.wbc = request.data.wbc;
          patientObj.hct = request.data.hct;
          patientObj.hepatic = request.data.hepatic;
          patientObj.kidney = request.data.kidney;
          patientObj.lipids = request.data.lipids;
          patientObj.specials = request.data.specials;
          patientObj.glucose = request.data.glucose;
          patientObj.xray = request.data.xray;
          patientObj.ctscan = request.data.ctscan;
          patientObj.mri = request.data.mri;
          patientObj.ultrasound = request.data.ultrasound;
          patientObj.pet = request.data.pet;
          patientObj.diagnosis = request.data.diagnosis;
          patientObj.daysintreatment = request.data.daysintreatment;
          patientObj.drugsintreatment = request.data.drugsintreatment;
          patientObj.proceduresintreatment = request.data.proceduresintreatment;

          t.setState({
            loadingPatient: false,
            patient: patientObj
          });

          if (!t.state.loadingPatient) {
            t.setState({
              loading: false
            });
          }
        } 
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  logout: function () {
   return axios.get("/logout").then(function (res) {
      // console.log(res);
      if (res.data) {
        //window.location.reload();
        window.location.href = "/";
      }
    });
  }
};