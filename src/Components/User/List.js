import React from 'react';
import { List, Datagrid, TextField,EditButton,ShowButton,BooleanField,EmailField } from 'react-admin';

export const UserList = (props) => (
    <List title="Liste des utilisateurs" {...props}>
        <Datagrid>
            <TextField source="displayName" label="Nom"/>
            <EmailField source="email" label="Email"/>
            <BooleanField source="admin" label="Admin ?"/>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);