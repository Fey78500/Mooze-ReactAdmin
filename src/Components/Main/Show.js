import React from 'react';
import { Show, SimpleShowLayout, TextField, ImageField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.mainName}"` : ''}</span>;
};

export const MainShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <ImageField source="image" label="Image"/>
            <TextField source="mainName" label="Nom"/>
            <TextField source="mainPrice" label="Prix"/>
        </SimpleShowLayout>
    </Show>
);