import React from 'react';
import {Edit, SimpleForm, TextInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.extraName}"` : ''}</span>;
};

export const ExtraEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="extraName" label="Nom"/>
            <TextInput source="extraPrice" label="Prix"/>
        </SimpleForm>
    </Edit>
);