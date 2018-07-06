import axios from "axios";

export default {
  getProcedures: function() {
    return axios.get("/api/procedures");
  },
  deleteProcedures: function(id) {
    return axios.delete("/api/procedures/" + id);
  },
  updateProcedures: function(id, data){
    return axios.put("/api/procedures/"+id, data)
  },
  saveProcedures: function(data) {
    return axios.post("/api/procedures", data);
  }
};
