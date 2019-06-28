import React from 'react';
import { List,Filter,Pagination,ReferenceInput,SelectInput, Datagrid,DateField, BooleanField,CardActions,ExportButton,TextField,ReferenceField  } from 'react-admin';
import { OrderEdit } from './Edit';
import {LineGraph} from '../Charts/LineChart';
import {BarGraph} from '../Charts/BarChart';
import {SuccesFood} from '../Charts/SuccesFood';

const PostActions = ({
    currentSort,
    exporter,
    filterValues,
    resource,
    total
}) => (
    <CardActions>
        <ExportButton
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
    </CardActions>
);

const PostFilter = props => (

    <Filter {...props}>
        <ReferenceInput label="Filtrer Restaurant" source="restoId" reference="restos" alwaysOn>
            <SelectInput  optionText="restaurantName" />
        </ReferenceInput>
        <ReferenceInput label="Filtrer Utilisateurs" source="ownerId" reference="users" alwaysOn>
            <SelectInput  optionText="displayName" />
        </ReferenceInput>
    </Filter>
    
);

const PostPagination = props => {console.log(props);
    return <Pagination  rowsPerPageOptions={[100,500]} {...props} perPage={100} rowsPerPage={100} />
}
export const OrderList = (props) => (
    <div>
        <List title="Liste des commandes" {...props} bulkActions={false} actions={<PostActions />} filters={<PostFilter />}  pagination={<PostPagination />}>
            <Datagrid expand={<OrderEdit />} rowClick="expand" >
                <BooleanField source="paid" label="Payée"/>
                <BooleanField source="checkedOut" label="Préparée"/>
                <BooleanField source="delivered" label="Livrée"/>
                <DateField source="createdAt" label="Date"/>
                <ReferenceField label="Client" source="ownerId" reference="users">
                    <TextField source="displayName" />
                </ReferenceField>
                <ReferenceField label="Restaurant" source="restoId" reference="restos">
                    <TextField source="restaurantName" />
                </ReferenceField>
                <ReferenceField label="Table" source="tableId" reference="tables">
                    <TextField source="tableName" />
                </ReferenceField>
                <TextField source="totalAmount" label="Total"/>
            </Datagrid>
        </List>
        <h2>Graphique des ventes</h2>
        <LineGraph source={{...props}}/>

        <h2>Graphique nombre de couvert par jour de semaine</h2>
        <BarGraph source={{...props}}/>

        <h2>Plats ayant le plus de succés</h2>
        <SuccesFood source={{...props}}/>
    </div>
    
);