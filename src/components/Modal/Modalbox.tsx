import styled, { keyframes } from 'styled-components';
import Buttons from './Buttons';
import { useContext } from 'react'
import { ModalContext } from '.';

const Modalbox = () => {
    const {  
        showModal,
        title, 
        content 
    } = useContext(ModalContext)
     
    return (
        <Container showModal={showModal}>
            <Title>{title}</Title>
            <Content>
                {content}
                <Buttons />
            </Content>
        </Container>
    )
}

export default Modalbox

const popup = keyframes`
    from {
        transform: scale(0); 
        opacity: 0;
    }
    to {
        transform: scale(1); 
        opacity: 1;
    }
`;

const Container = styled.div<{showModal: boolean}>`
    position: relative;
    z-index: 999;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    padding: 24px;
    margin: 1rem;
    width: 90%;
    animation-name: ${props => props.showModal && popup};
    animation-duration: .3s;
    animation-timing-function: ease-out;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 22px;
    margin-top: 0;
`

const Content = styled.div`
    color: black;
`