import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.drinkName}"` : ''}</span>;
};

export const DrinkShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <ImageField source="image[0].src" label="Image"/>
            <TextField source="drinkName" label="Nom"/>
            <TextField source="drinkPrice" label="Prix"/>
        </SimpleShowLayout>
    </Show>
);