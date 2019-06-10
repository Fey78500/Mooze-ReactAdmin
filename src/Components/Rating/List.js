import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput, TextField,ReferenceField ,EditButton,ShowButton  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
    </Filter>
    
);

export const RatingList = (props) => (
    <List title="Liste des notes" {...props}  filters={<PostFilter />}>
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