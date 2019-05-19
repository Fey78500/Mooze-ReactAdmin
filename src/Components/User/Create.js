// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput,BooleanInput,email,required} from 'react-admin';

export const UserCreate = (props) => (
    <Create title="Création d'un utilisateur" {...props}>
        <SimpleForm>
            <TextInput source="displayName" label="Nom" validate={[required()]}/>
            <TextInput source="email" label="Email" validate={[required(),email()]}/>
            <BooleanInput source="admin" label="Admin" validate={[required()]}/>
        </SimpleForm>
    </Create>
);