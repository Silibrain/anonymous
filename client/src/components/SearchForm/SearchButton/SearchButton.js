import React from 'react';

const SearchButton = (props) => (
    <button onClick={props.clicked} className="btn btn-primary">
    Search
    </button>
);

export default SearchButton;