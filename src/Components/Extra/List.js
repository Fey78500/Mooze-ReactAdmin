import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput,TextInput, TextField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
        <TextInput label="Filtrer Nom" source="extraName" alwaysOn/>
    </Filter>
    
);

export const ExtraList = (props) => (
    <List title="Liste des suppléments" {...props} bulkActions={false} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="extraName" label="Nom"/>
            <TextField source="extraPrice" label="Prix"/>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);