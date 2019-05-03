import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const RestoList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField source="restaurantPictureUrl" />
            <TextField source="restaurantName" />
            <TextField source="restaurantAddress" />
            <TextField source="restaurantType" />
            <ShowButton/>
            <EditButton />
        </Datagrid> 
    </List>
);