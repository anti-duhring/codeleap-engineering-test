import styled from "styled-components"

const Navbar = () => {
    return (
        <Container>
            <Title>CodeLeap Network</Title>
        </Container>
    )
}

export default Navbar

const Container = styled.nav`
    background-color: #7695EC;
    padding: 1rem;
`

const Title = styled.h2`
    margin: 0;
    color: white;
    font-size: 22px;
    font-weight: 700;
`