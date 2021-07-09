import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';

export const TypeName = styled.div`
    text-align: right;
    margin: 3em 2em 1em;
    color: ${props => props.theme.palette.primary.dark};
    font-weight: bold;
`;

export const DividerContainer = styled(({...props}) => <Divider {...props}/>)`
    margin-top: 4em;
    height: 2px !important;
    opacity: .6;
    background-color: ${props => props.theme.palette.primary.light} !important;
`;

export const Guidebox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 1em auto 2em;
`;

export const Blue = styled.div`
    text-align: center;
    background-color: #3d5fcf;
    flex-grow: 1;
`;

export const Green = styled.div`
    text-align: center;
    background-color: #6eb46e;
    flex-grow: 1;
`;

export const Yellow = styled.div`
    text-align: center;
    background-color: #ffc658;
    flex-grow: 1;
`;