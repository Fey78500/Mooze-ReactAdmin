import React from 'react';
import {Edit, SimpleForm, ReferenceInput,SelectInput, TextInput,required } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.tableName}"` : ''}</span>;
};


export const TableEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="tableName" label="Nom" validate={[required()]}/>
            <TextInput source="tableZone" label="Zone" validate={[required()]}/>
            <ReferenceInput label="Restaurant" source="resto_id" reference="restos" validate={[required()]}>
                <SelectInput optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);