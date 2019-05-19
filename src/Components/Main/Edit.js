import React from 'react';
import {Edit, SimpleForm, TextInput,ImageField,ImageInput,NumberInput,required,number,minValue,maxValue } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.mainName}"` : ''}</span>;
};

export const MainEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader" required multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="mainName" label="Nom" validate={[required()]}/>
            <NumberInput source="mainPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
        </SimpleForm>
    </Edit>
);