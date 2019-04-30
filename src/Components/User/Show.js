import React from 'react';
import { Show, SimpleShowLayout, TextField, BooleanField, EditButton, RichTextField } from 'react-admin';

export const UserShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <TextField source="displayName" />
            <TextField source="email" />
            <BooleanField source="admin" />
        </SimpleShowLayout>
    </Show>
);