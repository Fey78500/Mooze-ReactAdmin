import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

export const DrinkList = (props) => (
    <List title="Liste des boissons" {...props}>
        <Datagrid>
            <ImageField source="image" label="Image"/>
            <TextField source="drinkName" label="Nom"/>
            <TextField source="drinkPrice" label="Prix"/>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);