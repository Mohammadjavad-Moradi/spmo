import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChartWrapper } from './review-machine-charts.styles';

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color, backgroundColor: 'white'}}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReviewMachineCharts = ({data}) => {
    const dataArr = Object.keys(data).map(key => data[key]);
    return (
        <ChartWrapper> 
            <AreaChart
            width={500}
            height={400}
            data={dataArr}
            stackOffset="expand"
            margin={{
                top: 10,
                right: 30,
                left: 30,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={toPercent} />
            <Tooltip content={renderTooltipContent} />
            <Area type="monotone" dataKey="goodSheets" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="badSheets" stackId="1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ChartWrapper>
    );
}

export default ReviewMachineCharts;
