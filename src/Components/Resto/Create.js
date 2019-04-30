// in src/posts.js
import React from 'react';
import { Create, SimpleForm, ImageField, TextInput, ImageInput} from 'react-admin';

export const RestoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Related Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="restaurantName" />

        </SimpleForm>
    </Create>
);