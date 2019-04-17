import React from 'react';
import {Edit, SimpleForm, ReferenceInput,SelectInput, TextInput } from 'react-admin';

export const TableEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <TextInput source="tableName" />
            <TextInput source="tableZone" />
            <ReferenceInput label="Restaurant" source="resto_id" reference="restos">
                <SelectInput optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);