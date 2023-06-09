import styled from "styled-components"
import InputText from "../InputText";
import Textarea from "../Textarea";

type Props =  {
    label: string;
    type: 'text' | 'textarea';
    placeholder?: string;
    value?: string | null;
    onChangeValue: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const FormItem = (props: Props) => {
    const inputProps = {
        placeholder: props.placeholder,
        name: props.label,
        value: props.value ?? '',
        onChange: props.onChangeValue
    }

    return (
        <Container>
            <label htmlFor={props.label}>
                {props.label}
            </label>
            <InputContainer>
                {props.type == 'text' && 
                    <InputText
                        {...inputProps}
                    />
                }
                {props.type == 'textarea' &&
                    <Textarea
                        {...inputProps}
                    />
                }
            </InputContainer>
        </Container>
    )
}

export default FormItem

const Container = styled.div`
    margin-bottom: 1rem;
`

const InputContainer = styled.div`
    padding-top: .5rem;
`