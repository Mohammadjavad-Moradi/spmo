import React from 'react';

import TitleContainer from '../title-container/title-container.component';

import { VerticalTabsContainer, TabsContainer, TabPanelContainer } from './spmo-section-tabs.styles';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Offset from '../offset/offset.component';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          {children}
        </Box>
      )}
    </TabPanelContainer>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const SpmoSectionTabs = () => {
  const [value, setValue] = React.useState(0);
  const [sections] = React.useState([
    'چاپ افست', 'چاپ فولادی', 'چاپ اسکرین', 'بازبینی', 'چاپ نمره', 'برش و بسته بندی', 'امور مقدماتی یک', 'امور مقدماتی دو', 'اوراق اداری'
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>     
        <TitleContainer name='معاونت تولید' color='blue' />
        <VerticalTabsContainer>
            <TabsContainer
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            > 
            {
                sections.map((item, index) => (
                    <Tab label={item} key={index} {...a11yProps(index)}/>
                ))
            }
            </TabsContainer>
        <TabPanel value={value} index={0}>
            <Offset/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
            Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
            Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
            Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
            Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}>
            Item eight
        </TabPanel>
        <TabPanel value={value} index={8}>
            Item nine
        </TabPanel>
        
        </VerticalTabsContainer>
    </React.Fragment>
  );
}

export default SpmoSectionTabs;
