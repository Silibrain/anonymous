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
          userObj.title = response.data.title;
          userObj.bio = response.data.bio;
          userObj.role = response.data.role;

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
        alert("account updated");
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getInventory: function(t) {
   return axios
   .get("/inventory")
  },

  deleteInventory: function(id){
    return axios.delete("/inventory/"+id)
  },

  saveInventory: function(t) {
    const inventoryData = t.state;
    return axios
      .post("/inventory", inventoryData)
      .then(request => {
        if (request.data.name) {
          let inventoryObj = t.state.inventory;
          inventoryObj.name = request.data.name;
          inventoryObj.units = request.data.units;
          inventoryObj.unitcost = request.data.unitcost;
          inventoryObj.type = request.data.type;
          inventoryObj.expiryyear= request.data.expiryyear;

          t.setState({
            loadingInventory: false,
            inventory: inventoryObj
          });

          if (!t.state.loadingInventory) {
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

  getPracticioner: function(t) {
   return axios
      .get("/practicioner")
  },

  deletePracticioner: function(id){
    return axios.delete("/practicioner/"+id)
  },

  savePracticioner: function(t) {
    const practicionerData = t.state;
   return axios
      .post("/practicioner", practicionerData)
      .then(request => {
        if (request.data.name) {
          let practicionerObj = t.state.practicioner;
          practicionerObj.name = request.data.name;
          practicionerObj.specialties = request.data.specialties;
          practicionerObj.skills = request.data.skills;
          practicionerObj.fees = request.data.fees;
          practicionerObj.bio = request.data.bio;

          t.setState({
            loadingPracticioner: false,
            practicioner: practicionerObj
          });

          if (!t.state.loadingPracticioner) {
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

  getProcedure: function(t) {
   return axios
      .get("/procedure")
  },

  deleteProcedure: function(id){
    return axios.delete("/procedure/"+id)
  },

  saveProcedure: function(t) {
    const procedureData = t.state;
   return axios
      .post("/procedure", procedureData )
      .then(request => {
        if (request.data.name) {
          let procedureObj = t.state.procedure;
          procedureObj.name = request.data.name;
          procedureObj.type = request.data.type;
          procedureObj.location = request.data.location;
          procedureObj.result = request.data.result;
          procedureObj.avgtime = request.data.avgtime;
          procedureObj.capex = request.data.capex;
          procedureObj.opex = request.data.opex;

          t.setState({
            loadingProcedure: false,
            practicioner: procedureObj
          });

          if (!t.state.loadingProcedure) {
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