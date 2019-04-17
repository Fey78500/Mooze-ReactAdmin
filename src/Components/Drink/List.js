import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const DrinkList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField source="drinkPictureUrl" />
            <TextField source="drinkName" />
            <TextField source="drinkPrice" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);