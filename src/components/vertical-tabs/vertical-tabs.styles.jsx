import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const TitleContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.common.white};
    font-weight: bold;
    text-align: right;
    line-height: 3em;
    cursor: default;
    span {
        padding: 1em;
    }
`;

export const TabContainer = styled(Tab)`
    font-weight: bold !important;
`;

export const VerticalTabsContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row-reverse;
`;

export const TabsContainer = styled(({ ...props }) => <Tabs orientation="vertical" variant="scrollable" indicatorColor='primary' {...props} />)`
    display: flex;
    flex-direction: row-reverse;
    border-left: 1px solid ${props => props.theme.palette.divider};
    height: 300px;
`;

export const TabPanelContainer =  styled(({ ...props }) => <Tabs orientation="vertical" variant="scrollable" indicatorColor='primary' {...props} />)`
    height: 300px;

`;

export const LinkContainer = styled(Link)`
    display: block;
    text-align: right;
    margin-top: 1em;
    padding-right: 1em;
    text-decoration: none;
    color: inherit;
    &:visited {
        text-decoration: none;
        color: inherit;
    }
    &:first-child {
        margin-top: 0;
    }
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;