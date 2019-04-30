import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput,BooleanInput } from 'react-admin';


export const UserEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <TextInput source="displayName" />
            <TextInput source="email" />
            <BooleanInput source="admin" />
        </SimpleForm>
    </Edit>
);