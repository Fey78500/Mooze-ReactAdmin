import React from 'react';
import { Show, SimpleShowLayout, TextField, BooleanField,ReferenceField, EditButton, RichTextField } from 'react-admin';

export const OrderShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <BooleanField source="checkedOut" />
            <BooleanField source="paid" />
            <TextField source="updatedAt" />
            <TextField source="totalAmount" />
            <ReferenceField label="User" source="ownerId" reference="users">
                <TextField source="displayName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);