import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const MainShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <TextField source="red" />
            <TextField source="blue"/>
            <TextField source="green"/>
        </SimpleShowLayout>
    </Show>
);