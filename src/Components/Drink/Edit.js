import React from 'react';
import {Edit, SimpleForm, DisabledInput,ImageInput,ImageField, TextInput } from 'react-admin';


export const DrinkEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="drinkName" />
            <TextInput source="drinkPrice" />
        </SimpleForm>
    </Edit>
);