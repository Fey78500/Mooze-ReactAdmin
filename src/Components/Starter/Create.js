// in src/posts.js
import React from 'react';
import { Create, SimpleForm, ImageInput, TextInput, ImageField,NumberInput,required,number,minValue,maxValue } from 'react-admin';

export const StarterCreate = (props) => (
    <Create title="Création d'une entrée" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="starterName" label="Nom" validate={[required()]}/> 
            <NumberInput source="starterPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
        </SimpleForm>
    </Create>
);