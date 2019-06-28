import React from 'react';
import { List, Datagrid,Filter,ReferenceInput,SelectInput,TextInput, TextField,ImageField,EditButton,ShowButton,ReferenceField  } from 'react-admin';

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
        <TextInput label="Filtrer Nom" source="drinkName" alwaysOn/>
    </Filter>
    
);

export const DrinkList = (props) => (
    <List title="Liste des boissons" {...props} bulkActions={false} filters={<PostFilter />}>
        <Datagrid>
            <ImageField className="thumbNailView" source="image" label="Image"/>
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