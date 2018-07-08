import React from 'react';

const InventoryButton = (props) => (
    <button onClick={props.clicked} className="btn btn-primary">
    Inventory
    </button>
);

export default InventoryButton;