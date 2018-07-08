import React from 'react';
import ProceduresFormLabel from './ProceduresFormLabel/ProceduresFormLabel';
import ProceduresButton from './ProceduresButton/ProceduresButton';

const ProceduresForm = props => {

    const proceduresLabels = props.labels.map((label, index) => {
        return <ProceduresFormLabel name={label.id} value={label.val} changed={(event) => props.changed(event, label.id)} key={label.id} />

    });

    return(
        <form>
            <div>
                {proceduresLabels}
            <ProceduresButton clicked={props.submit} />
            </div>
        </form> 
    );
}

export default ProceduresForm;