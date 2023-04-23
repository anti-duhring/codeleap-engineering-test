import styled from "styled-components"
import { Props } from "."
import Button from "../Form/Button"

const Buttons = (props: Props) => {
    if(!props.showButton) return null

    return (
        <Container>
            <Button
                title={props.secondaryButton ?? 'Cancel'}
                type='secondary'
                onClick={(e) => props.onClickPrimaryButton ? props.onClickPrimaryButton(e) : null}
            />
            <Button
                title={props.primaryButton ?? 'Confirm'}
                type='error'
                onClick={(e) => props.onClickPrimaryButton ? props.onClickPrimaryButton(e) : null}
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