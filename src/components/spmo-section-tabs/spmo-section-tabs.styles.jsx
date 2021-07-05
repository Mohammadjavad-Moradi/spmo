import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

export const VerticalTabsContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row-reverse;
`;

export const TabsContainer = styled(({ ...props }) => <Tabs orientation="vertical" variant="scrollable" indicatorColor='primary' textColor="primary" {...props} />)`
    display: flex;
    flex-direction: row-reverse;
    border-left: 1px solid ${props => props.theme.palette.divider};
    min-height: 300px;
    min-width: 110px;
    font-size: 2em !important;   
`;

export const TabPanelContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;