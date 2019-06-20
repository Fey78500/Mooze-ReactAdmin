import React from 'react';
import { List,Filter,Pagination,ReferenceInput,SelectInput, Datagrid,DateField, BooleanField,ShowButton,CardActions,ExportButton,TextField,ReferenceField  } from 'react-admin';
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
    </Filter>
    
);

const PostPagination = props => <Pagination rowsPerPage={100} rowsPerPageOptions={[100,500]} {...props} />
export const OrderList = (props) => (
    <div>
        <List title="Liste des commandes" {...props} actions={<PostActions />} sort={{ field: 'createdAt', order: 'ASC' }} filters={<PostFilter />}  pagination={<PostPagination />}>
            <Datagrid expand={<OrderEdit />}>
                <BooleanField source="paid" label="Payé ?"/>
                <BooleanField source="checkedOut" label="Préparé ?"/>
                <BooleanField source="delivered" label="Livré ?"/>
                <DateField source="createdAt" label="Date"/>
                <ReferenceField label="Client" source="ownerId" reference="users">
                    <TextField source="displayName" />
                </ReferenceField>
                <ReferenceField label="Restaurant" source="restoId" reference="restos">
                    <TextField source="restaurantName" />
                </ReferenceField>
                <TextField source="totalAmount" label="Total"/>
                <ShowButton/>
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