import React from 'react';
import { List, Datagrid, TextField,ReferenceField ,EditButton,ShowButton  } from 'react-admin';

export const RatingList = (props) => (
    <List title="Liste des notes" {...props}>
        <Datagrid>
            <TextField source="rate" label="Note"/>
            <ReferenceField label="Utilisateur" source="userId" reference="users">
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