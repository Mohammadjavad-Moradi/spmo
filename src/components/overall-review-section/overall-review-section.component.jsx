import React from 'react';

import { TypeName, DividerContainer, Guidebox, Blue, Green, Yellow } from './overall-review-section.styles';

import ShapChartBuilder from '../shap-chart-builder/shap-chart-builder.component';
import PieChartBuilder from '../pie-chart-builder/pie-chart-builder.component';
import Recharts from '../../pages/recharts/recharts.components';

const OverallReviewSection = ({data, personnel}) => {
    const dataArr = Object.keys(data).map(key => data[key])
    console.log(data)
    return (
        <div>
            {
                dataArr.map((section, index) => (
                    <div key={index}>
                        <TypeName>{section.name}</TypeName>
                        <DividerContainer />
                        <ShapChartBuilder chartData={section.data} />
                    </div>                 
                ))
            }
            <TypeName>آمار حضور کارکنان</TypeName>
            <DividerContainer />
            <Guidebox>
                <Blue>حاضرین</Blue>
                <Green>مرخصی کرونا</Green>
                <Yellow>مرخصی روزانه</Yellow>
            </Guidebox>
            <PieChartBuilder chartData={personnel}/>
            <TypeName>برنامه تولید</TypeName>
            <DividerContainer />
            <Recharts />
        </div>
    );
};

export default OverallReviewSection;