import axios from "axios";

export default {
  getInventory: function() {
    return axios.get("/api/inventory");
  },
  deleteInventory: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  updateInventory: function(id, data){
    return axios.put("/api/inventory/"+id, data)
  },
  saveInventory: function(data) {
    return axios.post("/api/inventory", data);
  }
};
