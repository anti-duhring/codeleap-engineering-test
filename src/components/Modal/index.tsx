import styled from "styled-components"
import Modalbox from "./Modalbox";

export type Props = {
    title: string;
    children: React.ReactElement;
    buttonTitle?: string;
    showButton?: boolean;
    onClickButton?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Modal = (props: Props) => {


    return (
        <Overlay>
            <Modalbox {...props} />
        </Overlay>
    )
}

export default Modal

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #DDDDDD;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`