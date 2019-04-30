import React from 'react';
import { List, Datagrid, TextField,ImageField,ReferenceField ,EditButton,ShowButton  } from 'react-admin';

export const RatingList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="rate" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="displayName" />
            </ReferenceField>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);