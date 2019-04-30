import React from 'react';
import {Edit, SimpleForm, DisabledInput,ReferenceInput,SelectInput, TextInput,ImageInput ,ImageField } from 'react-admin';


export const RatingEdit = (props) => (
    <Edit title="Color Edition" {...props}>
        <SimpleForm>
            <TextInput source="rate" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput  optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos">
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);