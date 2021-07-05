import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { PieChartsWrapper, Guidebox, Stain, LackOfInk, OverInk, Other } from './machineCharts.styles';

import PieChartBuilder from '../pie-chart-builder/pie-chart-builder.component';

const MachineCharts = ({ data }) => {
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name='نیمه سالم' dataKey="pv" stackId="a" fill="#ffc658" />
        <Bar name='نا سالم' dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar name='مشروط سالم' dataKey="uv" fill="#8884d8" />
      </BarChart>
      <Guidebox>
        <Stain>لک افست</Stain>
        <LackOfInk>عقب نشینی</LackOfInk>
        <OverInk>پرکردگی</OverInk>
        <Other>متفرقه</Other>
      </Guidebox>
      <PieChartsWrapper>
        {
          data.map((cage, index) => (
            <PieChartBuilder details={cage.details} key={index} name={cage.name}/>
          ))
        }   
      </PieChartsWrapper>
    </div>
  );
}

export default MachineCharts;