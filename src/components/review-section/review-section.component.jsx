import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectReview, selectTypeTitle } from '../../redux/production-data/production-data.selector';

import { OffsetContainer, TabsContainer, DividerContainer, TypeName } from './review-section.styles';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import BanknoteMenuBotton from '../banknote-menu-button/banknote-menu-button.component';
import ReviewCharts from '../reviewCharts/reviewCharts.component';
import ReviewMachineCharts from '../review-machine-charts/review-machine-charts.component';
import OverallReviewSection from '../overall-review-section/overall-review-section.component';


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

const ReviewSection = ({ reviewData, reviewTitle }) => {
  const [value, setValue] = React.useState(0);

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
            reviewData.map((section, index) => (
              <Tab label={section.name} key={index} {...a11yProps(index)} />
            ))
          }
        </TabsContainer>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BanknoteMenuBotton types={reviewData[0].data} index={0}/>
        <TypeName>{reviewTitle.title}</TypeName>
        <DividerContainer/>
        {
          reviewTitle.titleIndex !== null ? <ReviewCharts data={reviewData[0].data} titleIndex={reviewTitle.titleIndex}/> : null
        }    
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TypeName>{reviewData[1].title}</TypeName>
        <DividerContainer/>
          <ReviewMachineCharts data={reviewData[1].data}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OverallReviewSection data={reviewData[2].data} personnel={reviewData[2].personnel}/>
      </TabPanel>       
    </OffsetContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  reviewData: selectReview,
  reviewTitle: selectTypeTitle
})

export default connect(mapStateToProps)(ReviewSection);