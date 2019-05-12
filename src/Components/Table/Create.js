// in src/posts.js
import React from 'react';
import { Create, ReferenceInput, SimpleForm, SelectInput, TextInput } from 'react-admin';

export const TableCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tableName" label="Nom"/>
            <TextInput source="tableZone" label="Zone"/>
            <ReferenceInput label="Restaurant" source="resto_id" reference="restos">
                <SelectInput optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);