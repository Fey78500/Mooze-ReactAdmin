// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const MainCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="red" />
            <TextInput source="blue"/>
            <TextInput source="green"/>

        </SimpleForm>
    </Create>
);