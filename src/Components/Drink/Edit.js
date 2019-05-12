import React from 'react';
import {Edit, SimpleForm,ImageInput,ImageField, TextInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.drinkName}"` : ''}</span>;
};

export const DrinkEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="drinkName" label="Nom"/>
            <TextInput source="drinkPrice" label="Prix"/>
        </SimpleForm>
    </Edit>
);