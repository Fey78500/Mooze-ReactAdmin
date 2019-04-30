import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList , ResponsiveContainer} from 'recharts';
import { scalePow, scaleLog } from 'd3-scale';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { ListController, Title } from 'react-admin';

let data = [
  {"date":"19/05","totalAmount":150},
  {"date":"29/05","totalAmount":850},
  {"date":"02/06","totalAmount":1000}
];

export const LineGraph = (props) => (
  <ListController {...props.source}>
        {controllerProps => (
            <>
            {/* {console.log(data)}
            {data = Object.keys(controllerProps.data).map(function (i) {
              return controllerProps.data[i];
            })}
            {console.log(data)};
            {data != [] && */}
            <ResponsiveContainer height={300} width="95%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis type="number" dataKey="totalAmount" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="totalAmount" stroke="#ff7300" yAxisId={0} />
              </LineChart>
            </ResponsiveContainer>
            {/* } */}
            </>
        )}
      
  </ListController>


      /*<LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
      {test = props.source}
      {test.map(resource => (
        console.log(resource)
      ))}
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>*/
    
);


