import React from 'react';

const PatientsButton = (props) => (
    <button onClick={props.clicked} className="btn btn-primary">
    Submit
    </button>
);

export default PatientsButton;