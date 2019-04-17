import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const RestoList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField source="restaurantPictureUrl" />
            <TextField source="restaurantName" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);