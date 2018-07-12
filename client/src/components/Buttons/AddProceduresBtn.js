import React from "react";
import "./style.css";

const AddProceduresBtn = () => (
  <button type="button" className="btn btn-outline-info" onClick={( window.location = '/procedure/add')}>Add</button>
);

export default AddProceduresBtn;