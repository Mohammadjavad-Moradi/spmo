import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';

import { PieChartContainer, Label } from './pie-chart-builder.styles';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#96a88e', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartBuilder = ({chartData}) => {
    return (
        <React.Fragment>
            <PieChartContainer>  
                <PieChart width={250} height={250} >
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    paddingAngle={5}
                    innerRadius={40}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"        
                >
                    {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </PieChartContainer>
        </React.Fragment>
    );
};

export default PieChartBuilder;