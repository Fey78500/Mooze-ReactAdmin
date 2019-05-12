import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const MainList = (props) => (
    <List title="Liste des plats" {...props}>
        <Datagrid>
            <ImageField source="image[0].src" label="Image"/>
            <TextField source="mainName" label="Nom"/>
            <TextField source="mainPrice" label="Prix"/>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);