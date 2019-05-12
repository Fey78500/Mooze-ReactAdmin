import React from 'react';
import { Show, SimpleShowLayout, TextField, BooleanField, EditButton, RichTextField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.displayName}"` : ''}</span>;
};


export const UserShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="displayName" label="Nom"/>
            <TextField source="email" label="Email"/>
            <BooleanField source="admin" label="Admin ?"/>
        </SimpleShowLayout>
    </Show>
);