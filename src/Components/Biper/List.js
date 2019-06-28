import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput, TextField ,EditButton,ShowButton,ReferenceField  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
    </Filter>
    
);

export const BiperList = (props) => (
    <List title="Liste des entrées" {...props} bulkActions={false} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="key" label="Serial"/> 
            <TextField source="name" label="Nom"/> 
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);