import React from 'react';
import PatientsFormLabel from './PatientsFormLabel/PatientsFormLabel';
import PatientsButton from './PatientsButton/PatientsButton';

const PatientsForm = props => {

    const patientsLabels = props.labels.map((label, index) => {
        return <PatientsFormLabel name={label.id} value={label.val} changed={(event) => props.changed(event, label.id)} key={label.id} />

    });

    return(
        <form>
            <div>
                {patientsLabels}
            <PatientsButton clicked={props.submit} />
            </div>
        </form> 
    );
}

export default PatientsForm;