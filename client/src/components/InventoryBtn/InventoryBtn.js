import React from "react";
import "./InventoryBtn.css";

const InventoryBtn = () => (
<button type="button" className="btn btn-outline-info" onClick={( window.location = '/inventory')}>Inventory</button>
);

export default InventoryBtn