import styled from "styled-components"
import { Props } from "."
import Button from "../Form/Button"

const Buttons = (props: Props) => {
    if(!props.showButton) return null

    return (
        <Container>
            <Button
                title={props.buttonTitle ?? 'Confirm'}
                onClick={(e) => props.onClickButton ? props.onClickButton(e) : null}
            />
        </Container>
    )
}

export default Buttons

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`