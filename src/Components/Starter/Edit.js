import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput,ImageInput ,ImageField } from 'react-admin';


export const StarterEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="starterName" />
            <TextInput source="starterPrice" />
        </SimpleForm>
    </Edit>
);