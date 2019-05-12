import React from 'react';
import { List, Datagrid,DateField, BooleanField,ShowButton,CardActions,ExportButton,TextField,ReferenceField  } from 'react-admin';
import { OrderEdit } from './Edit';
import {LineGraph} from '../Charts/LineChart';
import {BarGraph} from '../Charts/BarChart';

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
export const OrderList = (props) => (
    <div>
        <List title="Liste des commandes" {...props} actions={<PostActions />} sort={{ field: 'checkedOut', order: 'DESC' }}>
            <Datagrid expand={<OrderEdit />}>
                <BooleanField source="paid" label="Payé ?"/>
                <BooleanField source="checkedOut" label="Préparé ?"/>
                <BooleanField source="delivered" label="Livré ?"/>
                <DateField source="createdAt" label="Date"/>
                <ReferenceField label="Client" source="user_id" reference="users">
                    <TextField source="displayName" />
                </ReferenceField>
                <TextField source="totalAmount" label="Total"/>
                <ShowButton/>
            </Datagrid>
        </List>
        <h2>Graphique des ventes</h2>
        <LineGraph source={{...props}}/>

        <h2>Graphique nombre de couvert par jour de semaine</h2>
        <BarGraph source={{...props}}/>
    </div>
    
);