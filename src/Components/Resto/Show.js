import React from 'react';
import { Show, SimpleShowLayout, TextField,ImageField } from 'react-admin';

export const RestoShow = (props) => (
    <Show title="Color Show" {...props}>
        <SimpleShowLayout>
            <ImageField source="restaurantPictureUrl" />
            <TextField source="restaurantName" />
        </SimpleShowLayout>
    </Show>
);