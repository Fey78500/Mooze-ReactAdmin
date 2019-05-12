// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="red" />
            <TextInput source="blue"/>
            <TextInput source="green"/>

        </SimpleForm>
    </Create>
);