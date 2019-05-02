/* eslint-disable react/no-multi-comp */
import React from 'react';
import { ListController } from 'react-admin';
import { Chart } from "react-google-charts";

let graphData = [];

let keys;
let values;
let hadData = false;
function getData(data){
  {keys = Object.keys(data).map(function (i) {
    return Object.keys(data[i]).slice(9,11).reverse();
  })}
  {values = Object.keys(data).map(function (i) {
    let date = data[i].updatedAt;
    date = new Date(date);
    let year = date.getUTCFullYear();
    // Minutes part from the timestamp
    let month = date.getMonth() + 1;
    // Seconds part from the timestamp
    let day = date.getDate();
    data[i].updatedAt = day + '/' + month + '/' + year;
    return Object.values(data[i]).slice(9,11).reverse();//
  })}
  //let test =[keys[0][9],keys[0][10]]
  graphData = keys[0]
  
  if(graphData !== undefined && graphData.length !== 0){
    values.unshift(keys[0]);
    graphData = values;
    hadData = true;
    console.log(graphData);
  }
}

export const BarGraph = (props) => (
  <ListController {...props.source}>
    {controllerProps => (
        <>
        {!hadData && getData(controllerProps.data)}
        {graphData !== undefined && graphData.length !== 0 && 
          <Chart chartType="Bar" width="100%" height="400px" data={graphData} />
        }
        </>
    )}
  
  </ListController>
);
