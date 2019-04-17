// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, ImageField, TextInput, ImageInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const RestoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source="restaurantPictureUrl" accept="image/*">
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="restaurantName" />

        </SimpleForm>
    </Create>
);