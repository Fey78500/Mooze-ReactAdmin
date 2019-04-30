/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'food', uv: 2000, pv: 2013, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
];

export default class BarGraph extends Component {  

  render() {

    return (
      <ResponsiveContainer height={300} width="95%">
        <BarChart data={data} maxBarSize={10}>
        <XAxis padding={{ left: 20, right: 100 }} type="number" dataKey="time" />
        <YAxis type="number" />
        <CartesianGrid horizontal={false} />
        <Tooltip />
        <Bar dataKey="uv" fill="#ff7300" maxBarSize={15} isAnimationActive={false} />
        <Bar dataKey="pv" fill="#387908" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
