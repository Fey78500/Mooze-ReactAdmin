// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, TextInput, ImageInput, ImageField, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const MainCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="mainName" />
            <TextInput source="mainPrice" />
        </SimpleForm>
    </Create>
);