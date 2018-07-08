import React from 'react';

const PatientsButton = (props) => (
    <button onClick={props.clicked} className="btn btn-primary">
    Patients
    </button>
);

export default PatientsButton;