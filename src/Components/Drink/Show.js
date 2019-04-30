import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField, DateField, EditButton, RichTextField } from 'react-admin';

export const DrinkShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <ImageField source="mainPictureUrl" />
            <TextField source="drinkPrice" />
            <TextField source="drinkPrice" />
        </SimpleShowLayout>
    </Show>
);