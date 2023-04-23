import styled from "styled-components"

type Props = {
    icon: React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    size?: {
        width: number | string;
        height: number | string;
    }
}
const IconButton = (props: Props) => {

    return (
        <Button
            onClick={props.onClick}
            disabled={props.disabled}
            size={props.size}
        >
            {props.icon}
        </Button>
    )
}

export default IconButton

const Button = styled.button<{ 
        size?: { width: number | string, height: number | string }
    }>`
    border: none;
    background-color: transparent;
    border-radius: 50%;
    padding: .2rem;
    color: white;
    transition: all .3s;
    cursor: pointer;
    opacity: ${props => props.disabled ? .3 : 1};
    width: ${props => props.size?.width ?? "auto"};
    height: ${props => props.size?.height ?? "auto"};

    &:active {
        opacity: .5;
    }

    &:hover {
        background-color: rgba(0,0,0,.1);
    }
`