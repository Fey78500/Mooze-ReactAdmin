import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

export const MainList = (props) => (
    <List title="Liste des plats" {...props}>
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