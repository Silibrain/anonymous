import axios from "axios";

export default {
  getReports: function() {
    return axios.get("/api/reports");
  },
  deleteReports: function(id) {
    return axios.delete("/api/reports/" + id);
  },
  updateReports: function(id, data){
    return axios.put("/api/reports/"+id, data)
  },
  saveReports: function(data) {
    return axios.post("/api/reports", data);
  }
};
