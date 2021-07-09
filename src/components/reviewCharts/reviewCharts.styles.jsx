import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';

export const PieChartsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

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
export const Orange = styled.div`
    text-align: center;
    background-color: #FF8042;
    flex-grow: 1;
`;

export const BlueSapphire = styled.div`
    text-align: center;
    background-color: #005f73;
    flex-grow: 1;
`;

export const MiddleBlueGreen = styled.div`
    text-align: center;
    background-color: #94d2bd;
    flex-grow: 1;
`;

export const ViridianGreen = styled.div`
    text-align: center;
    background-color: #0a9396;
    flex-grow: 1;
`;

export const PeriwinkleCrayola = styled.div`
    text-align: center;
    background-color: #c2cae8;
    flex-grow: 1;
`;

export const Celadon = styled.div`
    text-align: center;
    background-color: #adebc0;
    flex-grow: 1;
`;

export const Mindaro = styled.div`
    text-align: center;
    background-color: #E2F8A0;
    flex-grow: 1;
`;

export const GlossyGrape = styled.div`
    text-align: center;
    background-color: #9786AC;
    flex-grow: 1;
`;

export const SilverMetallic = styled.div`
    text-align: center;
    background-color: #A7A2A9;
    flex-grow: 1;
`;

export const BlueYonder = styled.div`
    text-align: center;
    background-color: #556EB4;
    flex-grow: 1;
`;
