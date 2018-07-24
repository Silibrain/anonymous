import React from "react";
import "./style.css";

const ViewInventoryBtn = () => (
<button type="button" className="btn btn-info" onClick={( window.location = '/inventory/view')}>View</button>
);

export default ViewInventoryBtn

    