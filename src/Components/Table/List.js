import React from 'react';
import { List, Datagrid, TextField,ReferenceField,EditButton,ShowButton  } from 'react-admin';

export const TableList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="tableName" />
            <TextField source="tableZone" />
            <ReferenceField label="Restaurant" source="resto_id" reference="restos">
                <TextField source="restaurantName" />
            </ReferenceField>
            <ShowButton/>
            <EditButton />
        </Datagrid>
    </List>
);