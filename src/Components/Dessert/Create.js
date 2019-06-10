// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput,ImageInput,ImageField,NumberInput,required,number,minValue,maxValue,ReferenceInput,SelectInput} from 'react-admin';

export const DessertCreate = (props) => (
    <Create title="Création d'un dessert" {...props}>
        <SimpleForm>
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="name" label="Nom" validate={[required()]}/>
            <NumberInput source="price" label="Prix"  validate={[required(), number(), minValue(0),maxValue(999)]}/>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);