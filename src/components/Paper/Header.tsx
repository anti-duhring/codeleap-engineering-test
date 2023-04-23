import styled from "styled-components"

type Props = {
    children?: React.ReactElement | never[] | React.ReactElement[] | string | string[];
}

const Header = (props: Props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: #7695EC;
    border-radius: 16px 16px 0 0;
    color: white;
    font-weight: 700;
    padding: 1rem;
`