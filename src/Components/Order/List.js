import React from 'react';
import { List, Datagrid,TextField, BooleanField,ShowButton,CardActions,ExportButton  } from 'react-admin';
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
        <List {...props} actions={<PostActions />}>
            <Datagrid expand={<OrderEdit />}>
                <BooleanField source="checkedOut" />
                <BooleanField source="paid" />
                <TextField source="updatedAt" />
                <ShowButton/>
            </Datagrid>
        </List>
        <h2>Graphique des ventes</h2>
        <LineGraph source={{...props}}/>

        <h2>Graphique nombre de couvert par jour de semaine</h2>
        <BarGraph source={{...props}}/>
    </div>
    
);