import axios from "axios";

export default {
  getUser: function() {
    return axios.get("/api/users");
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  updateUser: function(id, data) {
    return axios.put("/api/users/" + id, data);
  },
  saveUser: function(data) {
    console.log("hello", data);
    return axios.post("/api/users", data);
  }
};
