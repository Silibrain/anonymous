import React from "react";
import "./InventoryBtn.css";

const InventoryBtn = props => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/inventory')}>Inventory</button>
);

export default InventoryBtn