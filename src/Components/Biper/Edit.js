import React from 'react';
import {Edit, SimpleForm, TextInput,required,DisabledInput,ReferenceInput,SelectInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.name}"` : ''}</span>;
};

export const BiperEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput source="key" label="Serial" validate={[required()]}/> 
            <TextInput source="name" label="Nom" validate={[required()]}/> 
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput optionValue="key" optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);