import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, ImageField, RichTextField } from 'react-admin';

export const MainShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <ImageField source="mainPictureUrl" />
            <TextField source="mainName" />
            <TextField source="mainPrice" />
        </SimpleShowLayout>
    </Show>
);