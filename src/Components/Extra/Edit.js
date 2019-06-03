import React from 'react';
import {Edit, SimpleForm, TextInput,NumberInput,required,number,minValue,maxValue,ReferenceInput,SelectInput} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Modification de {record ? `"${record.extraName}"` : ''}</span>;
};

export const ExtraEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="extraName" label="Nom" validate={[required()]}/>
            <NumberInput source="extraPrice" label="Prix" validate={[required(), number(), minValue(0),maxValue(999)]}/>
            <ReferenceInput label="Restaurant" source="restoId" reference="restos" validate={[required()]}>
                <SelectInput  optionText="restaurantName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);