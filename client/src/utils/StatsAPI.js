import axios from "axios";

export default {
  getStats: function() {
    return axios.get("/api/stats");
  },
  deleteStats: function(id) {
    return axios.delete("/api/stats/" + id);
  },
  updateStats: function(id, data){
    return axios.put("/api/stats/"+id, data)
  },
  saveStats: function(data) {
    return axios.post("/api/stats", data);
  }
};
