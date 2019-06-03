import React from 'react';
import { List, Datagrid, TextField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

export const ExtraList = (props) => (
    <List title="Liste des suppléments" {...props}>
        <Datagrid>
            <TextField source="extraName" label="Nom"/>
            <TextField source="extraPrice" label="Prix"/>
            <ReferenceField label="Restaurant" source="restoId" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);