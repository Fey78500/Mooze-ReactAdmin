// in src/posts.js
import React from 'react';
import { Create, SimpleForm, ImageInput, TextInput, ImageField } from 'react-admin';

export const StarterCreate = (props) => (
    <Create title="Création d'une entrée" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="starterName" label="Nom"/> 
            <TextInput source="starterPrice" label="Prix"/>
        </SimpleForm>
    </Create>
);