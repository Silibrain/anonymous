import axios from "axios";

export default {
  getPracticioner: function() {
    return axios.get("/api/practicioners");
  },
  deletePracticioner: function(id) {
    return axios.delete("/api/practicioners/" + id);
  },
  updatePracticioner: function(id, data){
    return axios.put("/api/practicioners/"+id, data)
  },
  savePracticioner: function(data) {
    return axios.post("/api/practicioners", data);
  }
};
