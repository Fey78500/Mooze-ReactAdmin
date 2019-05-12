import React from 'react';
import { Show, SimpleShowLayout, TextField,DateField, BooleanField,ReferenceField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de la commande</span>;
};

export const OrderShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
        <BooleanField source="paid" label="Payé ?"/>
                <BooleanField source="checkedOut" label="Préparé ?"/>
                <BooleanField source="delivered" label="Livré ?"/>
                <DateField source="createdAt" label="Date"/>
                <ReferenceField label="Client" source="user_id" reference="users">
                    <TextField source="displayName" />
                </ReferenceField>
                <TextField source="totalAmount" label="Total"/>
        </SimpleShowLayout>
    </Show>
);