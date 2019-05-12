import React from 'react';
import {Edit, SimpleForm, DisabledInput, TextInput,ImageInput ,ImageField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.starterName}"` : ''}</span>;
};

export const StarterEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="starterName" label="Nom"/> 
            <TextInput source="starterPrice" label="Prix"/>
        </SimpleForm>
    </Edit>
);