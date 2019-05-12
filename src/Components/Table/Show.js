import React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.tableName}"` : ''}</span>;
};

export const TableShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="tableName" label="Nom"/>
            <TextField source="tableZone" label="Zone"/>
            <ReferenceField label="Restaurant" source="resto_id" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);