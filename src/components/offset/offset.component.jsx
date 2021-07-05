import React from 'react';

import { OffsetContainer, TabsContainer } from './offset.styles';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import MachineCharts from '../machineCharts/machineCharts.component';
import PersonelTable from '../personel-table/personel-table.component';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Offset = () => {
const [value, setValue] = React.useState(0);
const [machineNumber] = React.useState([
    {
        name: 'استاندارد یک',
        data: [
            {
              name: '170',
              uv: 1000,
              pv: 403,
              amt: 125,
              details: [
                { name: 'Group A', value: 200 },
                { name: 'Group B', value: 43 },
                { name: 'Group C', value: 50 },
                { name: 'Group D', value: 110 },
              ]
            },
            {
              name: '173',
              uv: 0,
              pv: 1398,
              amt: 88,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 198 },
                { name: 'Group D', value: 100 },
              ]
            },
            {
              name: '174',
              uv: 500,
              pv: 820,
              amt: 153,
              details: [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 150 },
                { name: 'Group D', value: 170 },
              ]
            },
            {
              name: '175',
              uv: 1500,
              pv: 1280,
              amt: 338,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 80 },
                { name: 'Group C', value: 80 },
                { name: 'Group D', value: 120 },
              ]
            },
            {
              name: '177',
              uv: 0,
              pv: 2858,
              amt: 532,
              details: [
                { name: 'Group A', value: 300 },
                { name: 'Group B', value: 2000 },
                { name: 'Group C', value: 200 },
                { name: 'Group D', value: 358 },
              ]
            }
          ]          
    },
    {
        name: 'استاندارد دو',
        data: [
            {
              name: '170',
              uv: 1000,
              pv: 403,
              amt: 125,
              details: [
                { name: 'Group A', value: 200 },
                { name: 'Group B', value: 43 },
                { name: 'Group C', value: 50 },
                { name: 'Group D', value: 110 },
              ]
            },
            {
              name: '173',
              uv: 0,
              pv: 1398,
              amt: 88,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 198 },
                { name: 'Group D', value: 100 },
              ]
            },
            {
              name: '174',
              uv: 500,
              pv: 820,
              amt: 153,
              details: [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 150 },
                { name: 'Group D', value: 170 },
              ]
            },
            {
              name: '175',
              uv: 1500,
              pv: 1280,
              amt: 338,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 80 },
                { name: 'Group C', value: 80 },
                { name: 'Group D', value: 120 },
              ]
            },
            {
              name: '177',
              uv: 0,
              pv: 2858,
              amt: 532,
              details: [
                { name: 'Group A', value: 300 },
                { name: 'Group B', value: 2000 },
                { name: 'Group C', value: 200 },
                { name: 'Group D', value: 358 },
              ]
            }
          ]          
    },
    {
        name: 'سوپر سه',
        data: [
            {
              name: '170',
              uv: 1000,
              pv: 403,
              amt: 125,
              details: [
                { name: 'Group A', value: 200 },
                { name: 'Group B', value: 43 },
                { name: 'Group C', value: 50 },
                { name: 'Group D', value: 110 },
              ]
            },
            {
              name: '173',
              uv: 0,
              pv: 1398,
              amt: 88,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 198 },
                { name: 'Group D', value: 100 },
              ]
            },
            {
              name: '174',
              uv: 500,
              pv: 820,
              amt: 153,
              details: [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 150 },
                { name: 'Group D', value: 170 },
              ]
            },
            {
              name: '175',
              uv: 1500,
              pv: 1280,
              amt: 338,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 80 },
                { name: 'Group C', value: 80 },
                { name: 'Group D', value: 120 },
              ]
            },
            {
              name: '177',
              uv: 0,
              pv: 2858,
              amt: 532,
              details: [
                { name: 'Group A', value: 300 },
                { name: 'Group B', value: 2000 },
                { name: 'Group C', value: 200 },
                { name: 'Group D', value: 358 },
              ]
            }
          ]          
    },
    {
        name: 'سوپر چهار',
        data: [
            {
              name: '170',
              uv: 1000,
              pv: 403,
              amt: 125,
              details: [
                { name: 'Group A', value: 200 },
                { name: 'Group B', value: 43 },
                { name: 'Group C', value: 50 },
                { name: 'Group D', value: 110 },
              ]
            },
            {
              name: '173',
              uv: 0,
              pv: 1398,
              amt: 88,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 198 },
                { name: 'Group D', value: 100 },
              ]
            },
            {
              name: '174',
              uv: 500,
              pv: 820,
              amt: 153,
              details: [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 150 },
                { name: 'Group D', value: 170 },
              ]
            },
            {
              name: '175',
              uv: 1500,
              pv: 1280,
              amt: 338,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 80 },
                { name: 'Group C', value: 80 },
                { name: 'Group D', value: 120 },
              ]
            },
            {
              name: '177',
              uv: 0,
              pv: 2858,
              amt: 532,
              details: [
                { name: 'Group A', value: 300 },
                { name: 'Group B', value: 2000 },
                { name: 'Group C', value: 200 },
                { name: 'Group D', value: 358 },
              ]
            }
          ]          
    },
    {
        name: 'سوپر پنج',
        data: [
            {
              name: '170',
              uv: 1000,
              pv: 403,
              amt: 125,
              details: [
                { name: 'Group A', value: 200 },
                { name: 'Group B', value: 43 },
                { name: 'Group C', value: 50 },
                { name: 'Group D', value: 110 },
              ]
            },
            {
              name: '173',
              uv: 0,
              pv: 1398,
              amt: 88,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 198 },
                { name: 'Group D', value: 100 },
              ]
            },
            {
              name: '174',
              uv: 500,
              pv: 820,
              amt: 153,
              details: [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 100 },
                { name: 'Group C', value: 150 },
                { name: 'Group D', value: 170 },
              ]
            },
            {
              name: '175',
              uv: 1500,
              pv: 1280,
              amt: 338,
              details: [
                { name: 'Group A', value: 1000 },
                { name: 'Group B', value: 80 },
                { name: 'Group C', value: 80 },
                { name: 'Group D', value: 120 },
              ]
            },
            {
              name: '177',
              uv: 0,
              pv: 2858,
              amt: 532,
              details: [
                { name: 'Group A', value: 300 },
                { name: 'Group B', value: 2000 },
                { name: 'Group C', value: 200 },
                { name: 'Group D', value: 358 },
              ]
            }
          ]          
    },
])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <OffsetContainer>
      <AppBar position="static" color="default">
        <TabsContainer
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          
        >   
            {
                machineNumber.map((machine, index) => (
                    <Tab label={machine.name} key={index} {...a11yProps(index)} />
                ))
            }
        </TabsContainer>
        </AppBar>
        {
            machineNumber.map((machine, index) => (
                <TabPanel key={index} index={index} value={value}>
                    <MachineCharts data={machine.data} />
                </TabPanel>
            ))
        }
        <PersonelTable/>
    </OffsetContainer>
  );
}

export default Offset;