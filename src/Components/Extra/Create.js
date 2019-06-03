// in src/posts.js
import React from 'react';
import { Create, SimpleForm, TextInput,NumberInput,required,number,minValue,maxValue,ReferenceInput,SelectInput} from 'react-admin';

export const ExtraCreate = (props) => (
    <Create title="Création d'un supplément" {...props}>
        <SimpleForm>
            <TextInput source="extraName" label="Nom" validate={[required()]}/>
            <NumberInput source="extraPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);