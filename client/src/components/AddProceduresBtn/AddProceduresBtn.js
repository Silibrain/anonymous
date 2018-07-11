import React from "react";
import "./AddProceduresBtn.css";

const AddProceduresBtn = () => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/procedures/add')}>Add</button>
);

export default AddProceduresBtn;