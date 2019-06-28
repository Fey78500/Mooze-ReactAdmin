// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput,required,ReferenceInput,SelectInput } from 'react-admin';

export const BiperCreate = (props) => (
    <Create title="Création d'une entrée" {...props}>
        <SimpleForm>
            <TextInput source="key" label="Serial" validate={[required()]}/> 
            <TextInput source="name" label="Nom" validate={[required()]}/> 
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput optionValue="key" optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);