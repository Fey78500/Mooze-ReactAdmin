// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput,ImageInput,ImageField} from 'react-admin';

export const DrinkCreate = (props) => (
    <Create title="Création d'une boisson" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="drinkName" label="Nom"/>
            <TextInput source="drinkPrice" label="Prix"/>
        </SimpleForm>
    </Create>
);