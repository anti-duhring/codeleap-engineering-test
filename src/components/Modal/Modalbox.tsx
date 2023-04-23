import styled from 'styled-components';
import Buttons from './Buttons';
import { useContext } from 'react'
import { ModalContext } from '.';

const Modalbox = () => {
    const {  title, content } = useContext(ModalContext)
     
    return (
        <Container>
            <Title>{title}</Title>
            <Content>
                {content}
                <Buttons />
            </Content>
        </Container>
    )
}

export default Modalbox

const Container = styled.div`
    position: relative;
    z-index: 999;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    padding: 24px;
    margin: 1rem;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 22px;
    margin-top: 0;
`

const Content = styled.div`
    color: black;
`