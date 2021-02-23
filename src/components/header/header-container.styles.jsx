import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/cbi.svg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs'; 

export const HeaderBar = styled.div`
    width: 100%;
    height: 7em;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, ${props => props.theme.palette.primary.light} 18%);
`;

export const LogoContainer = styled(Logo)`
    width: 7em;
    height: 7em;
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