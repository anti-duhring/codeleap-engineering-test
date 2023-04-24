import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    )
}

export default Loading;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 5rem;
`