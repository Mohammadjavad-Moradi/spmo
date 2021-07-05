import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';

export const OffsetContainer = styled.div`
    width: 100%;
    padding: 0;
`;

export const TabsContainer = styled(({ ...props }) => <Tabs variant="scrollable" indicatorColor='primary' textColor="primary" {...props} />)`
     
`;