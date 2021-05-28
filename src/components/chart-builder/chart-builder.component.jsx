import React from 'react';

import { Tree, TreeNode } from 'react-organizational-chart';

import ChartCard from '../chart-card/chart-card.component';

const ChartBuilder = () => {
    const [data] = React.useState(
        {
            name: 'امیر شکری',
            title: 'رییس کل',
            supervisees: 2,
            children: [
                {
                    name: 'مسعود اذرمهر',
                    title: 'معاون تولید',
                    supervisees: 3,
                    children: [
                        {
                            name: 'ابراهیم محمدی',
                            title: 'سرپرست بازبینی',
                            supervisees: 2,
                            children: [
                                {
                                    name: 'محمد صادق ظهیری',
                                    title: 'دایره بازبینی یک',
                                    supervisees: 20
                                },
                                {
                                    name: 'مهدی قنبریان',
                                    title: 'دایره بازبینی 2',
                                    supervisees: 20
                                }
                            ]
                        },
                        {
                            name: 'اسماعیل نادری',
                            title: 'سرپرست سالن چاپ',
                            supervisees: 0
                        },
                        {
                            name: 'علی حدادی',
                            title: 'سرپرست برش و بسته بندی',
                            supervisees: 0
                        }
                    ]
                },
                {
                    name: 'اقای فیض',
                    title: 'معاون برنامه ریزی',
                    supervisees: 0
                },
                {
                    name: 'معاون',
                    title: 'معاون مالی و اداری',
                    supervisees: 0
                },
                {
                    name: 'معاون',
                    title: 'معاون فنی',
                    supervisees: 0
                },
                {
                    name: 'معاون',
                    title: 'معاون نشر',
                    supervisees: 0
                }
            ]
        }
    )

    const rendering = (children) => {
        return (
            children.map((el, index) => {
                return (
                    <TreeNode key={index} label={<ChartCard title={el.title} name={el.name} supervisees={el.supervisees} />}>
                        {
                            el.children ? rendering(el.children) : null
                        }
                    </TreeNode>
                )
            })
        )
    }

    return (
        <div>
            <Tree label={<ChartCard title={data.title} name={data.name} supervisees={data.supervisees} />}>
                {
                    data.children ? rendering(data.children) : null
                }
            </Tree>
        </div>
    )
}

export default ChartBuilder;