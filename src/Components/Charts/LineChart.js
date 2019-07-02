import React from 'react';
import { ListController } from 'react-admin';
import { Chart } from "react-google-charts";
import moment from 'moment';

const options = {
  title: "",
  hAxis: { title: "Jours des commandes" },
  vAxis: { title: "Chiffres d'affaires total en euros", viewWindow: { min: 0 } },
  legend: "none"
};
let graphData = [];

let valuesPerDay = [];
let values;
let hadData = false;
function getData(data){
  values = Object.keys(data).map(function (i) {
    let date = moment(data[i].createdAt).format("DD/MM/YYYY");
    let exist = 0;
    valuesPerDay.map(function (item){
      if(item[0] === date){
        item[1] += data[i].totalAmount;
        exist = 1;
      }
    });
    if(exist !== 1 || valuesPerDay.length === 0){
      valuesPerDay.push([date,data[i].totalAmount,moment(data[i].createdAt)])
    }
    return Object.values(data[i]);
  })
  if(values !== undefined && values.length !== 0){
    valuesPerDay.sort(function(a,b){
      return moment( a[2] ).format("YYYYMMDD") - moment( b[2] ).format("YYYYMMDD");
    });
    valuesPerDay.unshift(['Jour','Chiffre d\'affaire','nothing']);
    valuesPerDay = valuesPerDay.map(function (item){
      item.pop();
      return item;
    });
    graphData = valuesPerDay;
    hadData = true;
  }
}

export const LineGraph = (props) => (
  <ListController {...props.source}>
    {controllerProps => (
        <>
        {!hadData && getData(controllerProps.data)}
        {graphData !== undefined && graphData.length !== 0 && 
          <Chart
            chartType="LineChart"
            data={graphData}
            options={options}
            width="100%"
            height="400px"
            legendToggle
          />
        }
        </>
    )}    
  </ListController>
);


