import React from 'react';
import { Show, SimpleShowLayout, TextField,ReferenceField} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.name}"` : ''}</span>;
};

export const BiperShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="key" label="Serial"/> 
            <TextField source="name" label="Nom"/> 
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);