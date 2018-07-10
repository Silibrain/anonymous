import React from 'react';
import Aux from '../../../hoc:Auxiliary/Auxiliary';

const SearchFormLabel = (props) => (
    <Aux>
        <label htmlFor={props.name}>{props.name}:</label>
        <input
        value={props.value}
        onChange={props.changed}
        type="text"
        className="form-control"
        />
        <br></br>
        </Aux>
);

export default SearchFormLabel