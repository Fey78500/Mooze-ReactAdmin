import React from 'react';
import {Edit, SimpleForm, TextInput,ImageInput ,ImageField,NumberInput,maxLength,required,number,minValue,maxValue,ReferenceInput,SelectInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Détail de {record ? `"${record.starterName}"` : ''}</span>;
};

export const StarterEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="starterName" label="Nom" validate={[required()]}/> 
            <TextInput source="description" label="Description" validate={[required(),maxLength (20)]}/>
            <NumberInput source="starterPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);