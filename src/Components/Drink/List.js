import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const DrinkList = (props) => (
    <List title="Liste des boissons" {...props}>
        <Datagrid>
            <ImageField source="image[0].src" label="Image"/>
            <TextField source="drinkName" label="Nom"/>
            <TextField source="drinkPrice" label="Prix"/>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);