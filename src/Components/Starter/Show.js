import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.starterName}"` : ''}</span>;
};

export const StarterShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <ImageField  source="image" label="Image"/>
            <TextField source="starterName" label="Nom"/>
            <TextField source="starterPrice" label="Prix"/>
        </SimpleShowLayout>
    </Show>
);