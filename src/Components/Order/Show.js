import React from 'react';
import { Show, SimpleShowLayout, TextField,DateField, BooleanField,ReferenceField, EditButton, RichTextField } from 'react-admin';

export const OrderShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <BooleanField source="paid" label="Payé ?"/>
            <BooleanField source="checkedOut" label="Préparé ?"/>
            <BooleanField source="delivered" label="Livré ?"/>
            <DateField source="createdAt" label="Date"/>
            <TextField source="totalAmount" />
            <ReferenceField label="User" source="ownerId" reference="users">
                <TextField source="displayName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);