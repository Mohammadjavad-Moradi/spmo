import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';

import { Label, PieChartContainer } from './pie-chart-half-circle.styles';

const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042'];

const PieChartHalfCircle = ({details, name}) => {
    const wastedData = [
        { name: 'offsetSemi', value: details.offset.sum.semi },
        { name: 'offsetWasted', value: details.offset.sum.wasted },
        { name: 'intaglioSemi', value: details.intaglio.sum.semi },
        { name: 'intaglioWasted', value: details.intaglio.sum.wasted },
    ];
    return ( 
        <React.Fragment> 
            <PieChartContainer>
                <PieChart width={250} height={250}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={wastedData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                    >
                        {wastedData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <Label>شماره قفسه:{name}</Label>
            </PieChartContainer>          
        </React.Fragment>    
    );
}

export default PieChartHalfCircle;