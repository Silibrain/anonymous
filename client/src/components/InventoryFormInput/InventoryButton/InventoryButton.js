import React from 'react';

const InventoryButton = (props) => (
    <button onClick={props.clicked} className="btn btn-primary">
    Submit
    </button>
);

export default InventoryButton;