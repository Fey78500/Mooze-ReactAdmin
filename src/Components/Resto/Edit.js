import React from 'react';
import {Edit, SimpleForm, ImageInput,ImageField, TextInput, SelectInput,required } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.restaurantName}"` : ''}</span>;
};

export const RestoEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader">
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
    </Edit>
);