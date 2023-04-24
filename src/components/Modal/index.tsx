import styled, { keyframes } from "styled-components"
import Modalbox from "./Modalbox";
import { createContext, useState } from "react";
import { ButtonTypes } from "../Form/Button";

export type Props = {
    showModal: boolean;
    toggleModal: () => void;
    title: string;
    children?: React.ReactElement | React.ReactElement[];
    primaryButtonTitle?: string;
    secondaryButtonTitle?: string;
    primaryButtonType?: ButtonTypes;
    secondaryButtonType?: ButtonTypes;
    primaryButtonDisabled?: boolean;
    secondaryButtonDisabled?: boolean;
    showButton?: boolean;
    onConfirm?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

export const ModalContext = createContext<any>({})

const Modal = (props: Props) => {

    const contextValue = {
        ...props,
        content: props.children,
    }

    return (
        <ModalContext.Provider value={contextValue}>
            <Overlay 
                showModal={props.showModal}
            >
                <Modalbox />
            </Overlay>
        </ModalContext.Provider>
    )
}

export default Modal

const fadein = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`

const Overlay = styled.div<{ showModal: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${props => props.showModal ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    animation-name: ${props => props.showModal && fadein};
    animation-duration: .3s;
    animation-timing-function: ease-out;
`