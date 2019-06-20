/* eslint-disable react/no-multi-comp */
import React from 'react';
import { ListController } from 'react-admin';
import { Chart } from "react-google-charts";
import moment from 'moment';

const options = {
  title: "",
  hAxis: { title: "Nombre de commande par unité" },
  vAxis: { title: "Jour de la semaine", viewWindow: { min: 0 } },
  legend: "none"
};

let graphData = [];

let values;
let valuesPerDay = [["Dimanche",0],["Lundi",0],["Mardi",0],["Mecredi",0],["Jeudi",0],["Vendredi",0],["Samedi",0]];
let hadData = false;

function getData(data){
  moment.locale('fr')
  values = Object.keys(data).map(function (i) {
    let date = data[i].createdAt;
    let day = moment(date).day();
    if(valuesPerDay[day] !== undefined){
      valuesPerDay[day][1] += 1;
    }
    return Object.values(data[i]);
  })
  graphData = valuesPerDay;
  
  if(values !== undefined && values.length !== 0){
    valuesPerDay.unshift(["Jour","Commandes"]);
    graphData = valuesPerDay;
    hadData = true;
  }
}

export const BarGraph = (props) => (
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
