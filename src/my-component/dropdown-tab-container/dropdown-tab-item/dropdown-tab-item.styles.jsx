import styled, { css } from 'styled-components';

import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import Grow from '@material-ui/core/Grow';

const nestedGrowStyles = css`
    position: relative;
    right: 110%;
    bottom: 50px;
`;

const getGrowStyles = props => {
    if (props.item) {
        return  nestedGrowStyles;
    }
}

export const TabContainer = styled(Tab)`
    && {
        min-width: auto;
        font-size: 1rem;
        text-transform: lowercase;
        padding: 0 .2em;
        margin-right: 20px;
    }
`;

export const GrowWrapper = styled(Grow)`
    ${getGrowStyles}
`;

export const ArrowBackIcon = styled(({...props}) => <ArrowBackIosOutlinedIcon color='action' fontSize="small" {...props}/>)`
    &&{
        position: relative;
        top: 0.4em;
        right: 0;
    }
`;

export const MenuItemElement = styled(MenuItem)`
    justify-content: flex-end !important;
`;

export const MenuListContainer = styled(MenuList)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;