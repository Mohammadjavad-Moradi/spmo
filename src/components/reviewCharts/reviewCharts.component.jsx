import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { TypeName, DividerContainer, Guidebox, BlueSapphire, ViridianGreen, MiddleBlueGreen, PeriwinkleCrayola, Celadon, Mindaro, GlossyGrape, SilverMetallic, BlueYonder, Blue, Green, Yellow, Orange } from './reviewCharts.styles';

import BarChartBuilder from '../bar-chart-builder/bar-chart-builder.component';
import PieChartHalfCircle from '../pie-chart-half-circle/pie-chart-half-circle.component';
import PersonelTable from '../personel-table/personel-table.component';

const ReviewCharts = ({ data, titleIndex }) => {
  const dataArr = Object.keys(data).map(key => data[key]);
  const chartData = Object.keys(dataArr[titleIndex].cages).map(key => dataArr[titleIndex].cages[key]);
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={chartData}
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
        <Bar name='نیمه سالم' dataKey="semi" stackId="a" fill="#ffc658" />
        <Bar name='نا سالم' dataKey="wasted" stackId="a" fill="#ca2e2e" />
        <Bar name='سالم' dataKey="good" stackId="b" fill="#6eb46e" />
        <Bar name='مشروط سالم' dataKey="conditional" stackId="b" fill="#3d5fcf" />
      </BarChart>
      <TypeName>اطلاعات کلی ضایعات</TypeName>
      <DividerContainer variant="middle" />
      <Guidebox>
        <Green>نیمه سالم افست</Green>
        <Blue>ناسالم افست</Blue>
        <Yellow>نیمه سالم فولادی</Yellow>
        <Orange>ناسالم فولادی</Orange>
      </Guidebox>
      {
        chartData.map((item, index) => (
          <PieChartHalfCircle key={index} details={item.details} name={item.name}/>
        ))
      }
      <TypeName>اطلاعات چاپ افست</TypeName>
      <DividerContainer  />
      <Guidebox>
        <BlueSapphire>لک افست</BlueSapphire>
        <ViridianGreen>کجی</ViridianGreen>
        <MiddleBlueGreen>عقب نشینی</MiddleBlueGreen>
        <Celadon>پرکردگی</Celadon>
        <BlueYonder>متفرقه</BlueYonder>
      </Guidebox>
      <TypeName>نیمه سالم</TypeName>
      <DividerContainer variant="middle" />
      <BarChartBuilder cages={chartData} offset semi/>
      <TypeName>ناسالم</TypeName>
      <DividerContainer variant="middle" />     
      <BarChartBuilder cages={chartData} offset wasted/>
      <TypeName>اطلاعات چاپ فولادی</TypeName>
      <DividerContainer />
      <Guidebox>
        <BlueSapphire>لک</BlueSapphire>
        <ViridianGreen>کجی</ViridianGreen>
        <MiddleBlueGreen>عقب نشینی</MiddleBlueGreen>
        <Celadon>پرکردگی</Celadon>
        <Mindaro>خرابی شابلون</Mindaro>
        <PeriwinkleCrayola>جاخوردگی </PeriwinkleCrayola>
        <SilverMetallic>سود</SilverMetallic>
        <GlossyGrape>پشت زدگی</GlossyGrape>
        <BlueYonder>متفرقه</BlueYonder>
      </Guidebox>
      <TypeName>نیمه سالم</TypeName>
      <DividerContainer variant="middle" />
      <BarChartBuilder cages={chartData} intaglio semi/>
      <TypeName>ناسالم</TypeName>
      <DividerContainer variant="middle" />
      <BarChartBuilder cages={chartData} intaglio wasted/>
      <PersonelTable/>
    </div>
  );
}

export default ReviewCharts;