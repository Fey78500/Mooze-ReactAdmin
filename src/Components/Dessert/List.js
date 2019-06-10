import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput, TextField,ImageField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
    </Filter>
    
);

export const DessertList = (props) => (
    <List title="Liste des desserts" {...props}  filters={<PostFilter />}>
        <Datagrid>
            <ImageField source="image" label="Image"/>
            <TextField source="name" label="Nom"/>
            <TextField source="price" label="Prix"/>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);