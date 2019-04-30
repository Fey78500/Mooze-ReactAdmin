import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput,ImageField,ImageInput } from 'react-admin';


export const MainEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="mainName" />
            <TextInput source="mainPrice" />
        </SimpleForm>
    </Edit>
);