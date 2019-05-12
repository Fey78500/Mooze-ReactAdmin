import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.extraName}"` : ''}</span>;
};

export const ExtraShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="extraName" label="Nom"/>
            <TextField source="extraPrice" label="Prix"/>
        </SimpleShowLayout>
    </Show>
);