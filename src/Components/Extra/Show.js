import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const ExtraShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <TextField source="extraName" />
            <TextField source="extraPrice" />
        </SimpleShowLayout>
    </Show>
);