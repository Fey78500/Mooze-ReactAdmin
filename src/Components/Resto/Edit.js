import React from 'react';
import {Edit, SimpleForm, ImageInput,ImageField, TextInput } from 'react-admin';
import firebase from "firebase";

export const RestoEdit = (props) => (
    <Edit title="Restaurant Edition" {...props}>
        <SimpleForm>
            <ImageInput source="pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="restaurantName" />
        </SimpleForm>
    </Edit>
);