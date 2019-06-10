import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput, TextField,ImageField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
    </Filter>
    
);

export const MainList = (props) => (
    <List title="Liste des plats" {...props}  filters={<PostFilter />}>
        <Datagrid>
            <ImageField source="image" label="Image"/>
            <TextField source="mainName" label="Nom"/>
            <TextField source="mainPrice" label="Prix"/>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);