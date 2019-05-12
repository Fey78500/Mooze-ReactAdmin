// in src/posts.js
import React from 'react';
import { Create, SimpleForm,ReferenceInput,SelectInput , TextInput } from 'react-admin';

export const RatingCreate = (props) => (
    <Create title="Création d'une note" {...props}>
        <SimpleForm>
            <TextInput source="rate" label="Note"/>
            <ReferenceInput label="Utilisateur" source="userId" reference="users">
                <SelectInput  optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos">
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);