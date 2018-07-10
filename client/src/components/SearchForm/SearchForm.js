import React from 'react';
import SearchFormLabel from './SearchFormLabel/SearchFormLabel';
import SearchButton from './SearchButton/SearchButton';

const SearchForm = props => {

    const searchLabels = props.labels.map((label, index) => {
        return <SearchFormLabel name={label.id} value={label.val} changed={(event) => props.changed(event, label.id)} key={label.id} />

    });

    return(
        <form>
            <div>
                {searchLabels}
            <SearchButton clicked={props.submit} />
            </div>
        </form> 
    );
}

export default SearchForm;