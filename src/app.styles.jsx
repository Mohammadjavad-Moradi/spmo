import styled from 'styled-components';



export const MainContainer = styled.main`
    
    background-color: ${props => props.theme.palette.secondary.light};
`;

export const PageContainer = styled(({...props}) => <div {...props} />)`
    width: 80vw;
    margin: 10px auto;
    background-color: ${props => props.theme.palette.common.white};

    ${props => props.theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;