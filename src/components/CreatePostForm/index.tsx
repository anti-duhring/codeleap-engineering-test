import styled from 'styled-components';
import FormItem from '../Form/FormItem';
import Paper from '../Paper';
import Button from '../Form/Button';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';

export type TPostData = {
    username: string,
    title: string,
    content: string,
    [key: string]: string
}

const CreatePostForm = () => {
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

    const handleSubmitPost = () => console.log(postData)

    return (
        <Paper>
            <Title>What’s on your mind?</Title>
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
                    onClick={handleSubmitPost}
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