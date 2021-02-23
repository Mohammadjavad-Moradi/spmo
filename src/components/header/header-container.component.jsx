import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { HeaderBar, 
    LogoContainer, 
    AppBarContainer, 
    ToolBarContainer, 
    TabContainer, 
    TabsContainer, 
    ProfileAndSearch 
} from './header-container.styles';

import Profile from '../profile/profile.component';
import SwipeableTemporaryDrawer from '../swipeable-drawer/swipeable-drawer.component';

import { quickLinksData, tabItemsData } from './tab-data';

const HeaderContainer = () => {
    
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    
    const [value, setValue] = useState(0);
    const [quickLinks] = useState(quickLinksData);
    const [tabItems] = useState(tabItemsData);

    useEffect(() => {
        quickLinks.content.map((item, index) => {
                if (item.linkUrl === window.location.pathname) {
                    setValue(index + 1);
                } else {
                    setValue(0);
                }
            }) 
    },[])

    const handleChange = (event, value) => {
        setValue(value);
    }


    const tabs = (
        <ToolBarContainer disableGutters>
            <ProfileAndSearch>
                <Profile/>
                { matchesMd ? <div></div> : null }                  
            </ProfileAndSearch> 

            <TabsContainer value={value} onChange={handleChange}>
                <SwipeableTemporaryDrawer items={tabItems} quickLinks={quickLinks}/>
                {
                    matchesSm ?
                    null
                    :
                    quickLinks.content.map((item, index) => (
                        <TabContainer key={index} label={item.title} component={Link} to={item.linkUrl}/>
                    ))
                }                  
            </TabsContainer>
        </ToolBarContainer>
    )

    return (
        <React.Fragment>
            {
                matchesXs ?
                null:
                <HeaderBar>
                    <Link to='/'>
                        <LogoContainer onClick={() => setValue(1)}/>
                    </Link>
                </HeaderBar>
            }
            <AppBarContainer >       
                { tabs }
            </AppBarContainer>
            {/* { matchesMd ? null : <DropdownTabContainer quickLinks={quickLinks}/>} */}
        </React.Fragment>
    )
}

export default HeaderContainer;