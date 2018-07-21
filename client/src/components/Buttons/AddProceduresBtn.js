import React from "react";
import "./style.css";

const AddProceduresBtn = () => (
  <button type="button" className="btn btn-info" onClick={( window.location = '/procedure/add')}>Add</button>
);

export default AddProceduresBtn;