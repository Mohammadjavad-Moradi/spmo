import React from 'react';
import { connect } from 'react-redux';

import { Tree, TreeNode } from 'react-organizational-chart';

import ChartCard from '../chart-card/chart-card.component';
import OrgChartEditorTools from '../org-chart-editor-tools/org-chart-editor-tools.component';

const ChartBuilder = ({chartData}) => {

    const [editData, setEditData] = React.useState({
        cardName: chartData.name,
        cardTitle: chartData.title,
        cardSupervisees: chartData.supervisees,
        indexArray: []
    })

    const editor = ( title, name, supervisees, address  ) => {
        let tempArr = [];
        address ? tempArr = [...address] : console.log('its head')
        console.log(`tempArr: ${tempArr}`)

        setEditData({
            cardTitle: title,
            cardName: name,
            cardSupervisees: supervisees,
            address: [...tempArr]   
        })
    }

    const rendering = (children) => {
        const childrenArray = Object.keys(children).map(key => children[key])
        return (
            childrenArray.map((el, index) => {
                return (
                    <TreeNode key={index} label={<ChartCard address={el.address} title={el.title} name={el.name} supervisees={el.supervisees} handleClick={editor}/>}>
                        {
                            el.children ? rendering(el.children) : console.log('no children')
                        }
                    </TreeNode>
                )
            })
        )
    }

    return (
        <div>
            <Tree label={<ChartCard title={chartData.title} name={chartData.name} supervisees={chartData.supervisees} handleClick={editor}/>}>
                {
                    chartData.children ? rendering(chartData.children) : null
                }
            </Tree>
            <OrgChartEditorTools editData={editData}/>
        </div>
    )
}

const mapStateToProps = state => ({
    chartData: state.orgChart.orgChart
})

export default connect(mapStateToProps)(ChartBuilder);

// const [data] = React.useState(
//     {
//         name: '???????? ????????',
//         title: '???????? ????',
//         supervisees: 2,
//         children: [
//             {
//                 name: '?????????? ????????????',
//                 title: '?????????? ??????????',
//                 supervisees: 3,
//                 children: [
//                     {
//                         name: '?????????????? ??????????',
//                         title: '???????????? ??????????????',
//                         supervisees: 2,
//                         children: [
//                             {
//                                 name: '???????? ???????? ??????????',
//                                 title: '?????????? ?????????????? ????',
//                                 supervisees: 20
//                             },
//                             {
//                                 name: '???????? ??????????????',
//                                 title: '?????????? ?????????????? 2',
//                                 supervisees: 20
//                             }
//                         ]
//                     },
//                     {
//                         name: '?????????????? ??????????',
//                         title: '???????????? ???????? ??????',
//                         supervisees: 0
//                     },
//                     {
//                         name: '?????? ??????????',
//                         title: '???????????? ?????? ?? ???????? ????????',
//                         supervisees: 0
//                     }
//                 ]
//             },
//             {
//                 name: '???????? ??????',
//                 title: '?????????? ???????????? ????????',
//                 supervisees: 0
//             },
//             {
//                 name: '??????????',
//                 title: '?????????? ???????? ?? ??????????',
//                 supervisees: 0
//             },
//             {
//                 name: '??????????',
//                 title: '?????????? ??????',
//                 supervisees: 0
//             },
//             {
//                 name: '??????????',
//                 title: '?????????? ??????',
//                 supervisees: 0
//             }
//         ]
//     }
// )