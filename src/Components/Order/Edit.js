import React from 'react';
import {Edit, SimpleForm, BooleanInput } from 'react-admin';


export const OrderEdit = (props) => (
    <Edit title=" " {...props}>
        <SimpleForm form={`post_edit_${props.id}`}>
            <BooleanInput source="paid" label="Payé" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
            <BooleanInput source="checkedOut" label="Préparé" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
            <BooleanInput source="delivered" label="Livré" style={{ display: 'inline', float: 'left', marginLeft: '20px' }}/>
            <br/><br/>
        </SimpleForm>
    </Edit>
);