import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const MainList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField source="mainPictureUrl" />
            <TextField source="mainName" />
            <TextField source="mainPrice" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);