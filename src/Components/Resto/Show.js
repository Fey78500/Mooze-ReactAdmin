import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.restaurantName}"` : ''}</span>;
};

export const RestoShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <ImageField source="image" label="Image"/>
            <TextField source="restaurantName" label="Nom du restaurant"/>
            <TextField source="restaurantType" label="Type du restaurant"/>
            <TextField source="restaurantAddress" label="Adresse du restaurant"/>
        </SimpleShowLayout>
    </Show>
);