import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const BarChartBuilder = ({cages, offset, intaglio, semi, wasted}) => {   
    const widthCalc = (cages) => {
        return cages.length * 130;
    }    
    const heightCalc = (intaglio) => {
        return intaglio ? 500 : 300;
    }   
    let data = [];
    if ( offset && semi ) { 
        cages.map((item) => {
            let newData = item.name
            item = { ...item.details.offset.semi};
            Object.defineProperty(item, 'name', { value: newData})
            return data.push(item)  
        })       
    }
    if ( offset && wasted ) { 
        cages.map((item) => {
            let newData = item.name
            item = { ...item.details.offset.wasted};
            Object.defineProperty(item, 'name', { value: newData})
            return data.push(item)  
        })      
    }
    if ( intaglio && semi ) { 
        cages.map((item) => {
            let newData = item.name
            item = { ...item.details.intaglio.semi};
            Object.defineProperty(item, 'name', { value: newData})
            return data.push(item)  
        })
    }
    if ( intaglio && wasted ) { 
        cages.map((item) => {
            let newData = item.name
            item = { ...item.details.intaglio.wasted};
            Object.defineProperty(item, 'name', { value: newData})
            return data.push(item)  
        })
    }
    
    return (
        <BarChart
          width={widthCalc(cages)}
          height={heightCalc(intaglio)}
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
            
            {
                offset && semi ?  <Bar dataKey="stain" stackId="a" fill="#005f73" /> : null
            }
            {
                offset && semi ? <Bar dataKey="unregistered" stackId="a" fill="#0a9396" /> : null
            }
            {
                offset && semi ? <Bar dataKey="lackOfInk" stackId="a" fill="#94d2bd" /> : null
            }
            {
                offset && semi ? <Bar dataKey="overInk" stackId="a" fill="#adebc0" /> : null
            }
            {
                offset && semi ? <Bar dataKey="other" stackId="a" fill="#556EB4" /> : null
            }
            {
                offset && wasted ? <Bar dataKey="unregistered" stackId="a" fill="#0a9396" /> : null
            }
            {
                offset && wasted ? <Bar dataKey="lackOfInk" stackId="a" fill="#94d2bd" /> : null
            }
            {
                offset && wasted ? <Bar dataKey="overInk" stackId="a" fill="#adebc0" /> : null
            }
            {
                offset && wasted ? <Bar dataKey="other" stackId="a" fill="#556EB4" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="stain" stackId="a" fill="#005f73" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="unregistered" stackId="a" fill="#0a9396" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="lackOfInk" stackId="a" fill="#94d2bd" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="overInk" stackId="a" fill="#adebc0" /> : null
            }
            {
                intaglio && semi ?  <Bar dataKey="shablon" stackId="a" fill="#e2f8a0" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="jakhordegi" stackId="a" fill="#c2cae8" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="sood" stackId="a" fill="#A7A2A9" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="poshtzadegi" stackId="a" fill="#9786AC" /> : null
            }
            {
                intaglio && semi ? <Bar dataKey="other" stackId="a" fill="#556EB4" /> : null
            }
            {
                intaglio && wasted ? <Bar dataKey="unregistered" stackId="a" fill="#0a9396" /> : null
            }
            {
                intaglio && wasted ? <Bar dataKey="lackOfInk" stackId="a" fill="#94d2bd" /> : null
            }
            {
                intaglio && wasted ? <Bar dataKey="overInk" stackId="a" fill="#adebc0" /> : null
            }
            {
                intaglio && wasted ? <Bar dataKey="sood" stackId="a" fill="#A7A2A9" /> : null
            }
            {
                intaglio && wasted ? <Bar dataKey="poshtzadegi" stackId="a" fill="#9786AC" /> : null
            }
            {
                intaglio && wasted ? <Bar dataKey="other" stackId="a" fill="#556EB4" /> : null
            }
        </BarChart>
    );
}

export default BarChartBuilder;