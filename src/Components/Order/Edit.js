import React from 'react';
import {Edit, SimpleForm, BooleanInput, TextInput } from 'react-admin';


export const OrderEdit = (props) => (
    <Edit title=" " {...props}>
        <SimpleForm form={`post_edit_${props.id}`}>
            <BooleanInput source="checkedOut" />
            <BooleanInput source="paid"/>
        </SimpleForm>
    </Edit>
);