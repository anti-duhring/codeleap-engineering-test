import styled from "styled-components";

type Props = {
    placeholder?: string;
    id?: string;
    name?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const InputText = (props: Props) => {
    return (
        <Input 
            type="text" 
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default InputText

const Input = styled.input`
    border: 1px solid #777777;
    outline: none;
    border-radius: 8px;
    padding: 8px 11px 8px 11px;
    width: 100%;

    &::placeholder {
        color: #CCCCCC;
    }
`