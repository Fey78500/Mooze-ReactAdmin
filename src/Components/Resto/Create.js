// in src/posts.js
import React from 'react';
import { Create, SimpleForm, ImageField, TextInput,SelectInput, ImageInput,required} from 'react-admin';

export const RestoCreate = (props) => (
    <Create title="Ajout d'un restaurant" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="restaurantName" label="Nom du restaurant" validate={[required()]}/>
            <TextInput source="restaurantAddress" label="Adresse du restaurant" validate={[required()]}/>
            <SelectInput source="restaurantType" label="Type du restaurant" validate={[required()]} choices={[
                { id: 'tacos', name: 'Tacos' },
                { id: 'kebab', name: 'Kebab' },
                { id: 'sushi', name: 'Sushi' },
            ]} />
        </SimpleForm>
    </Create>
);