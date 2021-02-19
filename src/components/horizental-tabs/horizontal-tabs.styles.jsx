import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;

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