import styled from "styled-components"

type Props = {
    icon: React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
const IconButton = (props: Props) => {
    return (
        <Button
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.icon}
        </Button>
    )
}

export default IconButton

const Button = styled.button`
    border: none;
    background: transparent;
    color: white;
    transition: all .1s;
    cursor: pointer;
    opacity: ${(props: any) => props.disabled ? '.5' : '1'};;

    &:active {
        opacity: .5;
    }
`