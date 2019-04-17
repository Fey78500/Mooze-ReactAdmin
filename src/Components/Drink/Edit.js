import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput } from 'react-admin';


export const DrinkEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <TextInput source="red" />
            <TextInput source="blue"/>
            <TextInput source="green"/>
        </SimpleForm>
    </Edit>
);