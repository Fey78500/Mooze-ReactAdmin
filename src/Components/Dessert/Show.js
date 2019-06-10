import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.name}"` : ''}</span>;
};

export const DessertShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <ImageField source="image" label="Image"/>
            <TextField source="name" label="Nom"/>
            <TextField source="price" label="Prix"/>
        </SimpleShowLayout>
    </Show>
);