import React from 'react';
import {Edit, SimpleForm, TextInput,BooleanInput,email,required } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.displayName}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="displayName" label="Nom" validate={[required()]}/>
            <TextInput source="email" label="Email" validate={[required(),email()]}/>
            <BooleanInput source="admin" label="Admin" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);