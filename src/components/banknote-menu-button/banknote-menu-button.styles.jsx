import styled from 'styled-components';

import Button from '@material-ui/core/Button';

export const ChooseButton = styled(({...props}) => <Button variant='contained' color='primary' {...props} /> )`
    margin: 2em auto;
`;

export const ChooseButtonContainer = styled.div`
    margin: 1em auto 3.5em;
    text-align: center;
`;