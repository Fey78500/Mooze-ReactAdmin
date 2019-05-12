import React from 'react';
import { Show, SimpleShowLayout, TextField,ReferenceField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de la note</span>;
};

export const RatingShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="rate" label="Note"/>
            <ReferenceField label="Utilisateur" source="userId" reference="users">
                <TextField source="displayName" />
            </ReferenceField>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);