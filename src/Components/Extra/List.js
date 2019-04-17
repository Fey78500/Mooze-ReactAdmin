import React from 'react';
import { List, Datagrid, TextField,EditButton,ShowButton  } from 'react-admin';

export const ExtraList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="extraName" />
            <TextField source="extraPrice" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);