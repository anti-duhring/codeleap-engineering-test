import styled from "styled-components";


type Props = {
    title?: String;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = (props: Props) => {
    return (
        <ButtonBtn
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.title}
        </ButtonBtn>
    )
}

export default Button

const ButtonBtn = styled.button`
    background-color: ${(props: any) => props.disabled ? 'gray' : '#7695EC'};
    color: white;
    font-weight: 700;
    border: none;
    padding: 8px;
    border-radius: 8px;
    min-width: 6rem;
`