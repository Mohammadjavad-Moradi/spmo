import { LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart, Pie,
  BarChart, Bar, Cell
  } from 'recharts';

import { RechartsContainer } from './recharts.styles';
//const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page b', uv: 300, pv: 2200, amt: 2200}];
const data = [
  {
    name: 'شنبه',
    uv: 85000,
    pv: 70000,
    amt: 2400,
  },
  {
    name: 'یکشنبه',
    uv: 80000,
    pv: 75000,
    amt: 2210,
  },
  {
    name: 'دوشنبه',
    uv: 66000,
    pv: 75000,
    amt: 2290,
  },
  {
    name: 'سه شنبه',
    uv: 90000,
    pv: 70000,
    amt: 2000,
  },
  {
    name: 'چهارشنبه',
    uv: 73000,
    pv: 80000,
    amt: 2181,
  },
  {
    name: 'پنجشنبه',
    uv: 58000,
    pv: 65000,
    amt: 2500,
  }
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const data03 = [
  {
    name: 'شنبه',
    uv: 10,
    pv: 28,
    amt: 2400,
  },
  {
    name: 'یکشنبه',
    uv: 9,
    pv: 29,
    amt: 2210,
  },
  {
    name: 'دوشنبه',
    uv: 11,
    pv: 27,
    amt: 2290,
  },
  {
    name: 'سه شنبه',
    uv: 8,
    pv: 30,
    amt: 2000,
  },
  {
    name: 'چهارشنبه',
    uv: 8,
    pv: 30,
    amt: 2181,
  },
  {
    name: 'پنجشنبه',
    uv: 7,
    pv: 31,
    amt: 2500,
  }
];

const Recharts = () => {
  return (
    <RechartsContainer>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 0 }} />
        <YAxis width={60}/>
        <Tooltip />
        <Legend />
        <Line name="خروجی بازبینی" type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line name="برنامه تولید" type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
      <BarChart
          width={500}
          height={300}
          data={data03}
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
          <Bar name="تعداد حاضرین" dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar name="مرخصی کرونا" dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
    </RechartsContainer>
  );
}

export default Recharts;