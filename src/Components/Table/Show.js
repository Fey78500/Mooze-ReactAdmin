import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const TableShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <TextField source="tableName" />
            <TextField source="tableZone" />
        </SimpleShowLayout>
    </Show>
);