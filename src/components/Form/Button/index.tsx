import styled from "styled-components";


type Props = {
    title?: String;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'primary' | 'secondary' | 'error'
}

enum ButtonTypeBgColor {
    primary = '#7695EC',
    secondary = 'white',
    error = ' #FF5151',
    disabled = 'gray',
}

enum ButtonTypeColor {
    primary = 'white',
    error = 'white',
    secondary = 'black',
    disabled = 'gray',
}

enum ButtonTypeBorderColor {
    primary = '#7695EC',
    error = '#FF5151',
    secondary = '#999999',
    disabled = 'gray',
}

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
            colorType={type}
        >
            {title}
        </ButtonBtn>
    )
}

export default Button

const ButtonBtn = styled.button<{ colorType: string }>`
    background-color: ${
        (props: any) => props.disabled ? 
            ButtonTypeBgColor.disabled : 
            ButtonTypeBgColor[props.colorType as keyof typeof ButtonTypeBgColor]
    };
    color: ${
        (props: any) => props.disabled ? 
            ButtonTypeColor.disabled : 
            ButtonTypeColor[props.colorType as keyof typeof ButtonTypeColor]
    };
    font-weight: 700;
    border: 1px solid ${(props: any) => ButtonTypeBorderColor[props.colorType as keyof typeof ButtonTypeBorderColor]};
    padding: 8px;
    border-radius: 8px;
    min-width: 6rem;
    cursor: pointer;
`