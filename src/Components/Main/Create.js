// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput, ImageInput, ImageField} from 'react-admin';

export const MainCreate = (props) => (
    <Create title="Création d'un plat" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="mainName" label="Nom"/>
            <TextInput source="mainPrice" label="Prix"/>
        </SimpleForm>
    </Create>
);