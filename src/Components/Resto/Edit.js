import React from 'react';
import {Edit, SimpleForm, ImageInput,ImageField, TextInput } from 'react-admin';

export const RestoEdit = (props) => (
    <Edit title="Restaurant Edition" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="restaurantName" />
            <TextInput source="restaurantAddress" />
        </SimpleForm>
    </Edit>
);