import styled from "styled-components"
import LogoutButton from "./LogoutButton"

const Navbar = () => {
    return (
        <Container>
            <Title>CodeLeap Network</Title>
            <LogoutButton />
        </Container>
    )
}

export default Navbar

const Container = styled.nav`
    background-color: #7695EC;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h2`
    margin: 0;
    color: white;
    font-size: 22px;
    font-weight: 700;
`