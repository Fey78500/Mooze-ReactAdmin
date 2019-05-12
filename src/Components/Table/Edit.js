import React from 'react';
import {Edit, SimpleForm, ReferenceInput,SelectInput, TextInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.tableName}"` : ''}</span>;
};


export const TableEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="tableName" label="Nom"/>
            <TextInput source="tableZone" label="Zone"/>
            <ReferenceInput label="Restaurant" source="resto_id" reference="restos">
                <SelectInput optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);