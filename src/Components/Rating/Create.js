// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput,ReferenceInput,SelectInput , TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const RatingCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="rate" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput  optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos">
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);