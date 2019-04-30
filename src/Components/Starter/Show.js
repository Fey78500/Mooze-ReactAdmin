import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField, DateField, EditButton, RichTextField } from 'react-admin';

export const StarterShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <ImageField  source="starterPictureUrl" />
            <TextField source="starterName" />
            <TextField source="starterPrice" />
        </SimpleShowLayout>
    </Show>
);