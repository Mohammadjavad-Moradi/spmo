import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Tabs from '@material-ui/core/Tabs';
import InputBase from '@material-ui/core/InputBase';

export const SearchBoxContainer = styled.div`
    position: relative;
    border-radius: ${props => props.theme.shape.borderRadius};
    background-color: transparent;
    &:hover {
        margin-left: 0;
        scale: 2;
    }
    ${props => props.theme.breakpoints.up('sm')} {
    margin-left: ${props => props.theme.spacing(1)};
    width: auto;
    }
`;

export const SearchIconDiv = styled.div`
    &&{
        padding: ${props => props.theme.spacing(0, 2)};
        height: 100%;
        position: absolute;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

export const InputBaseContainer = styled(({...props}) => <InputBase placeholder='Search...' aria-label='search' {...props}/>)`
    color: inherit;
    padding: ${props => props.theme.spacing(1, 1, 1, 0)};
    padding-left: 3em;
    transition: ${props => props.theme.transitions.create('width')};
    width: 100%;

    ${props => props.theme.breakpoints.down('sm')} {
        color: ${props => props.theme.palette.common.white} !important;
        width: 12ch;
        &:focus {
            width: 20ch;
        }
    }
`;


export const AppBarContainer = styled(({ ...props }) => <AppBar color='transparent' position='static' {...props} />)`
    && {
        flex-grow: 1;
        line-height: 3em;
        width: 80vw;
        margin: 1em auto 0;
        background-color: ${props => props.theme.palette.common.white};
    }

    ${props => props.theme.breakpoints.down('md')} {
            width: 100% !important;
            margin: 0 !important;
            background-color: ${props => props.theme.palette.primary.main} !important;
            color: ${props => props.theme.palette.common.white} !important;
        };
    
`;

export const ToolbarContainer = styled(({...props}) => <Toolbar disableGutters {...props}/>)`
    display: flex;
    justify-content: space-between;
    
`;

export const TabsContainer = styled(({...props}) => <Tabs indicatorColor='primary' {...props} />)`
    
    overflow: visible !important; 
    div{
        flex-flow: row-reverse;
        
        overflow: visible !important;
        border-radius: 0;
        z-index: ${props => props.theme.zIndex.tooltip};

        span {
            font-size: ${ props => props.theme.typography.body2};
        }
    }

`;

