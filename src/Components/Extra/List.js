import React from 'react';
import { List, Datagrid, TextField,EditButton,ShowButton  } from 'react-admin';

export const ExtraList = (props) => (
    <List title="Liste des suppléments" {...props}>
        <Datagrid>
            <TextField source="extraName" label="Nom"/>
            <TextField source="extraPrice" label="Prix"/>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);