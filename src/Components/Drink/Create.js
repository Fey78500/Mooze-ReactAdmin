// in src/posts.js
import React from 'react';
import { Create, Edit, SimpleForm, DisabledInput, TextInput,ImageInput,ImageField, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const DrinkCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="drinkName" />
            <TextInput source="drinkPrice" />
        </SimpleForm>
    </Create>
);