import styled from 'styled-components';

import Button from '@material-ui/core/Button';

export const ChooseButton = styled(({...props}) => <Button variant='contained' color='primary' {...props} /> )`
    margin: 2em auto;
`;

export const ChooseButtonContainer = styled.div`
    margin: 2em auto;
    text-align: center;
`;