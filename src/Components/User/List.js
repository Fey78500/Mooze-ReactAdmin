import React from 'react';
import { List, Datagrid, TextField,EditButton,ShowButton  } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="email" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);