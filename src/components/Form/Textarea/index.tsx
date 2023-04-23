import styled from "styled-components"

type Props = {
    placeholder?: string;
    name?: string;
    value: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

const Textarea = (props: Props) => {
    return (
        <TextArea
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >

        </TextArea>
    )
}

export default Textarea

const TextArea = styled.textarea`
    border: 1px solid #777777;
    outline: none;
    border-radius: 8px;
    padding: 8px 11px 8px 11px;
    width: 100%;

    &::placeholder {
        color: #CCCCCC;
    }
`