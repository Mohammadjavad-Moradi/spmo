import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/cbi-logo.svg';
import headerImage from '../../assets/header.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs'; 

export const HeaderBar = styled.div`
    width: 100%;
    height: 7em;
    background: url(${headerImage}) no-repeat top right;
    background-size: cover;
`;

export const HeaderBarMobile = styled.div`
    width: 100%;
    background: rgb(36,112,171);
    background: linear-gradient(90deg, rgba(36,112,171,1) 0%, rgba(255,255,255,1) 0%, rgba(16,78,126,1) 0%, rgba(36,112,171,1) 40%, rgba(36,112,171,1) 60%, rgba(16,78,126,1) 100%);

`;

export const LogoContainer = styled(({...props}) => <Logo {...props} />)`
    width: ${props => props.xs ? '2.5em' : '5em'};
    height: ${props => props.xs ? '2.5em' : '5em'};
    padding: ${props => props.xs ? '.2em 45%' : '1em 1em'};
    margin: ${props => props.xs ? '0 auto' : '0'};

    @keyframes appear {
        0% {
          letter-spacing: 1em;
          filter: blur(12px);
          opacity: 0;
        }
        100% {
          filter: blur(0px);
          opacity: 1;
        }
    }   
    animation: appear 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const AppBarContainer = styled(({...props}) => <AppBar color='primary' position='static' {...props} />)`

`;

export const ToolBarContainer = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`
export const TabsContainer = styled(({...props}) => <Tabs indicatorColor='primary' {...props}/>)`
    div {
        flex-flow: row-reverse;
    }
`;

export const TabContainer = styled(Tab)`
    && {
        min-width: auto;
        font-size: 1rem;
        padding: 0 .5em;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const ProfileAndSearch = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;

    div {
        padding: 0 1em;
    }
`;