import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput, TextField,ImageField ,EditButton,ShowButton,ReferenceField  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
    </Filter>
    
);

export const StarterList = (props) => (
    <List title="Liste des entrées" {...props}  filters={<PostFilter />}>
        <Datagrid>
            <ImageField  source="image" label="Image"/>
            <TextField source="starterName" label="Nom"/>
            <TextField source="starterPrice" label="Prix"/>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);