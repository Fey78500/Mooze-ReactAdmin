import React from 'react';
import {Edit, SimpleForm, ReferenceInput,SelectInput, TextInput } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de la note</span>;
};

export const RatingEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="rate" label="Note"/>
            <ReferenceInput label="Utilisateur" source="userId" reference="users">
                <SelectInput  optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos">
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);