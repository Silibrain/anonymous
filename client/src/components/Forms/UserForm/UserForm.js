import React from 'react';
import UserFormLabel from './UserFormLabel/UserFormLabel';
import UserButton from './UserButton/UserButton';
import "./style.css";

const UserForm = props => {
    const userLabels = props.labels.map((label, index) => {
        return <UserFormLabel name={label.id} value={label.val} changed={(event) => props.changed(event, label.id)} key={label.id} />
    });
    return(
        <form>
            <div>
                {userLabels}
            <UserButton clicked={props.submit} />
            </div>
        </form> 
    );
}
export default UserForm;