import React from 'react';
import { List, Datagrid, BooleanField,ShowButton,CardActions,ExportButton  } from 'react-admin';
import { OrderEdit } from './Edit';


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

    
    <List {...props} actions={<PostActions />}>
        <Datagrid expand={<OrderEdit />}>
            <BooleanField source="checkedOut" />
            <BooleanField source="paid" />
            <ShowButton/>
        </Datagrid>
    </List>
);