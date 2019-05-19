// in src/posts.js
import React from 'react';
import { Create, SimpleForm,ReferenceInput,SelectInput ,NumberInput,required,number,minValue,maxValue } from 'react-admin';

export const RatingCreate = (props) => (
    <Create title="Création d'une note" {...props}>
        <SimpleForm>
            <NumberInput source="rate" label="Note" validate={[required(), number(), minValue(0),maxValue(5)]}/>
            <ReferenceInput label="Utilisateur" source="userId" reference="users" validate={[required()]}>
                <SelectInput  optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);