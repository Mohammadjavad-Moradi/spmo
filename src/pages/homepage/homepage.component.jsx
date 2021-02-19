import React from 'react';

import { HomePageContainer } from './homepage.styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SlideShow from '../../components/slideshow-news/slideshow-news.component';
import VerticalTabs from '../../components/vertical-tabs/vertical-tab.component';
import PayamBank from '../../components/payam-bank/payam-bank.component';
import HorizontalTabs from '../../components/horizental-tabs/horizontal-tabs.component';


const HomePage = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <HomePageContainer>
            <SlideShow />
            {
                matchesXs ? <HorizontalTabs /> : <VerticalTabs />
            }
            <PayamBank />
        </HomePageContainer>
    )
}


export default HomePage;