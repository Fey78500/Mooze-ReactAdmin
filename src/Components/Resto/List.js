import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton } from 'react-admin';

export const RestoList = (props) => (
    <List title="Liste des restaurants" {...props} bulkActions={false}>
        <Datagrid>
            <ImageField className="thumbNailView" source="image" label="Image"/>
            <TextField source="restaurantName" label="Nom"/>
            <TextField source="restaurantAddress" label="Adresse"/>
            <TextField source="restaurantType" label="Type"/>
            <ShowButton/>
            <EditButton />
        </Datagrid> 
    </List>
);