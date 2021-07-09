import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Divider from '@material-ui/core/Divider';

export const OffsetContainer = styled.div`
    width: 100%;
    padding: 0;
    overflow: auto;
`;

export const TabsContainer = styled(({ ...props }) => <Tabs variant="scrollable" indicatorColor='primary' textColor="primary" {...props} />)`
     
`;

export const DividerContainer = styled(({...props}) => <Divider variant='middle' {...props}/>)`

    @keyframes moveindivider {
        0% {
            transform: opacity(0);
        }

        100% {
            transform: opacity(1);
        }
    }

    height: 2px !important;
    opacity: .6;
    background-color: ${props => props.theme.palette.primary.light} !important;
    animation: 1s ease-out 0s moveindivider;
`;

export const TypeName = styled.div`
    text-align: right;
    margin: 1em 2em;
    color: ${props => props.theme.palette.primary.dark};
    font-weight: bold;
`;