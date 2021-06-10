import React from 'react';

import ChartBuilder from '../../components/chart-builder/chart-builder.component';

import { OrgChartContainer } from './org-chart-page.styles';

const OrgChart = () => {
    return (
        <OrgChartContainer>
            <ChartBuilder />
        </OrgChartContainer>
    )
}

export default OrgChart;