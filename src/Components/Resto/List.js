import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton ,FunctionField } from 'react-admin';

export const RestoList = (props) => (
    <List title="Liste des restaurants" {...props}>
        <Datagrid>
            <ImageField source="image[0].src" label="Image"/>
            <TextField source="restaurantName" label="Nom"/>
            <TextField source="restaurantAddress" label="Adresse"/>
            <TextField source="restaurantType" label="Type"/>
            <ShowButton/>
            <EditButton />
        </Datagrid> 
    </List>
);