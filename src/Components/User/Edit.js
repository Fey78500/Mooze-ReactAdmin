import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput,BooleanInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.displayName}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="displayName" label="Nom"/>
            <TextInput source="email" label="Email"/>
            <BooleanInput source="admin" label="Admin"/>
        </SimpleForm>
    </Edit>
);