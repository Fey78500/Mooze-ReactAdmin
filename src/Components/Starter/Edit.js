import React from 'react';
import {Edit, SimpleForm, TextInput,ImageInput ,ImageField,NumberInput,required,number,minValue,maxValue } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.starterName}"` : ''}</span>;
};

export const StarterEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="starterName" label="Nom" validate={[required()]}/> 
            <NumberInput source="starterPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
        </SimpleForm>
    </Edit>
);