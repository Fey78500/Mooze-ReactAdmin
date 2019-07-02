// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput, ImageInput, ImageField,NumberInput,ReferenceInput,SelectInput,required,number,minValue,maxValue} from 'react-admin';

export const MainCreate = (props) => (
    <Create title="Création d'un plat" {...props}>
        <SimpleForm>
            {console.log(props)}
            <ImageInput source="image" label="Image" accept="image/*" placeholder="Cliquer ici ou déposer une image pour l'uploader">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="mainName" label="Nom" validate={[required()]}/>
            <NumberInput source="mainPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);