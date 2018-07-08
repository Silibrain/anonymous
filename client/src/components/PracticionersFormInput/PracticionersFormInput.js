import React from 'react';
import PracticionersFormLabel from './PracticionersFormLabel/PracticionersFormLabel';
import PracticionersButton from './PracticionersButton/PracticionersButton';

const PracticionersFormInput = props => {

    const practicionersLabels = props.labels.map((label, index) => {
        return <PracticionersFormLabel name={label.id} value={label.val} changed={(event) => props.changed(event, label.id)} key={label.id} />

    });

    return(
        <form>
            <div>
                {practicionersLabels}
            <PracticionersButton clicked={props.submit} />
            </div>
        </form> 
    );
}

export default PracticionersFormInput;