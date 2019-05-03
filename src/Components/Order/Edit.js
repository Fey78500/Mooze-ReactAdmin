import React from 'react';
import {Edit, SimpleForm, BooleanInput, TextInput } from 'react-admin';


export const OrderEdit = (props) => (
    <Edit title=" " {...props}>
        <SimpleForm form={`post_edit_${props.id}`}>
            <BooleanInput source="paid" label="Payé" />
            <BooleanInput source="checkedOut" label="Préparé"/>
            <BooleanInput source="delivered" label="Livré"/>
        </SimpleForm>
    </Edit>
);