import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton  } from 'react-admin';

export const DrinkList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField source="mainPictureUrl" />
            <TextField source="drinkPrice" />
            <TextField source="drinkPrice" />
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);