// in src/posts.js
import React from 'react';
import { Create, ReferenceInput, SimpleForm, SelectInput, TextInput,required } from 'react-admin';

export const TableCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tableName" label="Nom" validate={[required()]}/>
            <TextInput source="tableZone" label="Zone" validate={[required()]}/>
            <ReferenceInput label="Restaurant" source="resto_id" reference="restos" validate={[required()]}>
                <SelectInput optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);