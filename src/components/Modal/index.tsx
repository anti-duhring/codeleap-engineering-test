import styled from "styled-components"
import Modalbox from "./Modalbox";

export type Props = {
    title: string;
    children?: React.ReactElement;
    primaryButton?: string;
    secondaryButton?: string;
    showButton?: boolean;
    onClickPrimaryButton?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    onClickSecondaryButton?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`