// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput, BooleanInput} from 'react-admin';

export const UserCreate = (props) => (
    <Create title="Création d'un utilisateur" {...props}>
        <SimpleForm>
            <TextInput source="displayName" label="Nom"/>
            <TextInput source="email" label="Email"/>
            <BooleanInput source="admin" label="Admin"/>
        </SimpleForm>
    </Create>
);