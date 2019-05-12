import React from 'react';
import { List, Datagrid, TextField,ImageField ,EditButton,ShowButton  } from 'react-admin';

export const StarterList = (props) => (
    <List title="Liste des entrées" {...props}>
        <Datagrid>
            <ImageField  source="image[0].src" label="Image"/>
            <TextField source="starterName" label="Nom"/>
            <TextField source="starterPrice" label="Prix"/>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);