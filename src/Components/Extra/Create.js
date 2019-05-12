// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput} from 'react-admin';

export const ExtraCreate = (props) => (
    <Create title="Création d'un supplément" {...props}>
        <SimpleForm>
            <TextInput source="extraName" label="Nom"/>
            <TextInput source="extraPrice" label="Prix"/>
        </SimpleForm>
    </Create>
);