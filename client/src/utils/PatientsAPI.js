import axios from "axios";

export default {
  getPatient: function() {
    return axios.get("/api/patients");
  },
  deletePatient: function(id) {
    return axios.delete("/api/patients/" + id);
  },
  updatePatient: function(id, data){
    return axios.put("/api/patients/"+id, data)
  },
  savePatient: function(data) {
    return axios.post("/api/patients", data);
  }
};
