import React from 'react';
import { List, Datagrid, TextField,EditButton,ShowButton,BooleanField } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="displayName" />
            <TextField source="email" />
            <BooleanField source="admin" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);