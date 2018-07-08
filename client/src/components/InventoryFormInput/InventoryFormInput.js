import React from 'react';
import InventoryFormLabel from './InventoryFormLabel/InventoryFormLabel';
import InventoryButton from './InventoryButton/InventoryButton';

const InventoryForm = props => {

    const inventoryLabels = props.labels.map((label, index) => {
        return <InventoryFormLabel name={label.id} value={label.val} changed={(event) => props.changed(event, label.id)} key={label.id} />

    });

    return(
        <form>
            <div>
                {inventoryLabels}
            <InventoryButton clicked={props.submit} />
            </div>
        </form> 
    );
}

export default InventoryForm;