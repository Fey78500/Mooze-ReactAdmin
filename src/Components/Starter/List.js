import React from 'react';
import { List, Datagrid, TextField,ImageField ,EditButton,ShowButton  } from 'react-admin';

export const StarterList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField  source="starterPictureUrl" />
            <TextField source="starterName" />
            <TextField source="starterPrice" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);