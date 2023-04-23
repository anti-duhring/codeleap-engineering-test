import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import FormItem from '../Form/FormItem';
import Paper from '../Paper';

export type TPostData = {
    username: string,
    title: string,
    content: string,
    [key: string]: string
}

type Props = {
    title?: string;
    onSubmit?: (postData: TPostData) => any;
}

const CreatePostForm = (props: Props) => {
    const { username } = useAppSelector(state => state.user.userData)

    const [postData, setPostData] = useState<TPostData>({
        username,
        title: '',
        content: ''
    })

    const handlePostDataChange = (e: any) => {
        setPostData(oldValue => {
            const value = { ...oldValue }
            value[e.target.name.toLowerCase()] = e.target.value

            return value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        if(!props.onSubmit) return 

        return props.onSubmit(postData)
    }

    return (
        <Paper>
            <Title>{props.title}</Title>
            <FormItem
                label='Title'
                type='text'
                placeholder='Hello world'
                value={postData.title}
                onChangeValue={handlePostDataChange}
            />
            <FormItem
                label='Content'
                type='textarea'
                placeholder='Content here'
                value={postData.content}
                onChangeValue={handlePostDataChange}
            />
            <ButtonContainer>
                <Button
                    title='Create'
                    onClick={handleSubmit}
                    disabled={!postData.title || !postData.content}
                />
            </ButtonContainer>
        </Paper>
    )
}

export default CreatePostForm

const Title = styled.h3`
    margin-top: 0;
`

const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`