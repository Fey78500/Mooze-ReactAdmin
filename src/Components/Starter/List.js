import React from 'react';
import { List, Datagrid, TextField,ImageField ,EditButton,ShowButton,ReferenceField  } from 'react-admin';

export const StarterList = (props) => (
    <List title="Liste des entrées" {...props}>
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