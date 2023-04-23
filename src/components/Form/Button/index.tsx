import styled from "styled-components";
import { ButtonBgColor, ButtonBgColorHover, ButtonBorderColor, ButtonColor, ButtonColorHover } from "./constants";

type Props = {
    title?: String;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: ButtonTypes
}

export type ButtonTypes = 'primary' | 'secondary' | 'error' | 'success'

const Button = ({
    title,
    disabled,
    onClick,
    type = 'primary',
}: Props) => {

    return (
        <ButtonBtn
            disabled={disabled}
            onClick={onClick}
            colorType={disabled ? 'disabled' : type}
        >
            {title}
        </ButtonBtn>
    )
}

export default Button

const ButtonBtn = styled.button<{ colorType: string }>`
    background-color: ${
        props => ButtonBgColor[props.colorType as keyof typeof ButtonBgColor]
    };
    color: ${
        props => ButtonColor[props.colorType as keyof typeof ButtonColor]
    };
    border: 1px solid ${props => ButtonBorderColor[props.colorType as keyof typeof ButtonBorderColor]};
    opacity: ${props => props.disabled ? 0.5 : 1};
    font-weight: 700;
    padding: 8px;
    border-radius: 8px;
    min-width: 8rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: ${
            props => ButtonBgColorHover[props.colorType as keyof typeof ButtonBgColorHover]
        };
        color: ${
            props => ButtonColorHover[props.colorType as keyof typeof ButtonColorHover]
        };
    }

    &:active {
        opacity: .3;
    }
`