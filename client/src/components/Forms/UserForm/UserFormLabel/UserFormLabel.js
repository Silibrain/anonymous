import React from 'react';
const UserFormLabel = (props) => (
<div className="form">
        <label htmlFor={props.name}>{props.name}:</label>
        <input
        value={props.value}
        onChange={props.changed}
        type="text"
        className="form-control"
        />
        <br></br>
</div>
  
);
export default UserFormLabel