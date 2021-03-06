import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput, TextField,ReferenceField,EditButton,ShowButton  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
    </Filter>
    
);

export const TableList = (props) => (
    <List title="Liste des tables" {...props} bulkActions={false} filters={<PostFilter />}>
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