import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput } from 'react-admin';


export const ExtraEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <TextInput source="extraName" />
            <TextInput source="extraPrice" />
        </SimpleForm>
    </Edit>
);