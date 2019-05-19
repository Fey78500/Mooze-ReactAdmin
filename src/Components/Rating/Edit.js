import React from 'react';
import {Edit, SimpleForm, ReferenceInput,SelectInput ,NumberInput,required,number,minValue,maxValue } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de la note</span>;
};

export const RatingEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <NumberInput source="rate" label="Note" validate={[required(), number(), minValue(0),maxValue(5)]}/>
            <ReferenceInput label="Utilisateur" source="userId" reference="users" validate={[required()]}>
                <SelectInput  optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);