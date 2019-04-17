// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const ExtraCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="extraName" />
            <TextInput source="extraPrice" />
        </SimpleForm>
    </Create>
);