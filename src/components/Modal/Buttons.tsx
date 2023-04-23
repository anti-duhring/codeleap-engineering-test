import styled from "styled-components"
import { ModalContext } from "."
import Button from "../Form/Button"
import { useContext } from "react"

const Buttons = () => {
    const {
        showButton,
        primaryButtonTitle,
        primaryButtonType,
        secondaryButtonTitle,
        secondaryButtonType,
        primaryButtonDisabled,
        secondaryButtonDisabled,
        onConfirm,
        onCancel,
        toggleModal
    } = useContext(ModalContext)

    if(!showButton) return null

    return (
        <Container>
            <Button
                title={secondaryButtonTitle ?? 'Cancel'}
                type={secondaryButtonType ?? 'secondary'}
                onClick={(e) => onCancel ? 
                    (onCancel(e), toggleModal()) : toggleModal()
                }
                disabled={secondaryButtonDisabled}
            />
            <Button
                title={primaryButtonTitle ?? 'Confirm'}
                type={primaryButtonType ?? 'primary'}
                onClick={(e) => onConfirm ? 
                    (onConfirm(e), toggleModal()) : toggleModal()
                }
                disabled={primaryButtonDisabled}
            />
        </Container>
    )
}

export default Buttons

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`