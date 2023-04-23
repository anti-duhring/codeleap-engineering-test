import styled from "styled-components"

type Props = {
    children?: React.ReactElement | never[] | React.ReactElement[];
}
const Paper = (props: Props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Paper

const Container = styled.div`
    background-color: white;
    border: 1px solid #999999;
    border-radius: 16px;
    padding: 1rem;
    margin: 1rem;
`