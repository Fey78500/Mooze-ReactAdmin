import React from 'react';
import {Edit, SimpleForm, TextInput,ImageField,ImageInput,NumberInput,ReferenceInput,SelectInput,required,number,minValue,maxValue } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.mainName}"` : ''}</span>;
};

export const MainEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="mainName" label="Nom" validate={[required()]}/>
            <NumberInput source="mainPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);