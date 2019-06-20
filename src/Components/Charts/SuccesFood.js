import React from 'react';
import { ListController } from 'react-admin';
import { Chart } from "react-google-charts";

const options = {
  title: "",
  hAxis: { title: "Nombre de commande par unité" },
  vAxis: { title: "Plats", viewWindow: { min: 0 } },
  legend: "none"
};

let graphData = [];

let values = [];
let hadData = false;

function getData(data){
  if(data !== undefined && data.length !== 0){
    Object.values(data).map(function (i) {
      Object.values(i.orderItems).map(function (food) {
        if(values.length === 0){
          values.push([food.itemName,1])
        }else{
          let exist = 0;
          Object.keys(values).map(function (i) {
            if(values[i][0] === food.itemName){
              values[i][1] += 1;
              exist = 1;
            }
          });
          if(exist !== 1 || values.length === 0){
            values.push([food.itemName,1]);
          }
        }
      }); 
    });  
  }
  if(values !== undefined && values.length !== 0){
    values.unshift(["Jour","Plats"]);
    graphData = values;
    hadData = true;
  }
}
export const SuccesFood = (props) => (
  <ListController {...props.source}>
    {controllerProps => (
        <>
        {!hadData && getData(controllerProps.data)}
        {graphData !== undefined && graphData.length !== 0 && 
          <Chart chartType="BarChart" width="100%" height="400px" data={graphData} options={options} legendToggle/>
        }
        </>
    )}    
  </ListController>
);


