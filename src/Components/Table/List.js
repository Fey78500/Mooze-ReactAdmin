import React from 'react';
import { List, Datagrid, TextField,ReferenceField,EditButton,ShowButton  } from 'react-admin';

export const TableList = (props) => (
    <List title="Liste des tables" {...props}>
        <Datagrid>
            <TextField source="tableName" label="Nom"/>
            <TextField source="tableZone" label="Zone"/>
            <ReferenceField label="Restaurant" source="resto_id" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);