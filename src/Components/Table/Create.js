// in src/posts.js
import React from 'react';
import { Create, ReferenceInput, SimpleForm, SelectInput, TextInput, ImageInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const TableCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tableName" />
            <TextInput source="tableZone" />
            <ReferenceInput label="Restaurant" source="resto_id" reference="restos">
                <SelectInput optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);