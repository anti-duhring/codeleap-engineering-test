import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { TPost } from '@/services/api/post';
import { useState } from 'react';
import styled from 'styled-components';

import { TPostData } from '../CreatePostForm';
import PostItem from './PostItem';
import DeleteAndEditModals from './DeleteAndEditModals';

type Props = {
    posts: TPost[],
    deletePost: (id: number) => Promise<void>,
    editPost: (id: number, data: TPostData) => Promise<void>
}

export type ActionType = actionTypeEnum

export enum actionTypeEnum {
    delete,
    edit
}

const PostList = ({
    posts,
    deletePost,
    editPost
}: Props) => {
    const [actionType, setActionType] = useState<ActionType>(actionTypeEnum.delete)
    const [selectedPostData, setSelectedPostData] = useState<TPost>({
        id: -1,
        created_datetime:  new Date(),
        title: '',
        content: '',
        username: ''
    })

    const { username } = useAppSelector((state: RootState) => state.user.userData)

    const selectPostAndAction = (item: TPost, type: ActionType) => {
        setActionType(type)
        setSelectedPostData({ ...item })
    }

    const onConfirm = async() => {
        if(selectedPostData.id > -1 && selectedPostData.username == username) {
            actionType == actionTypeEnum.delete ? 
            await deletePost(selectedPostData.id) :       
            await editPost(selectedPostData.id, { 
                username,
                title: selectedPostData.title, 
                content: selectedPostData.content,
            })
        }
        clearPostData()
    }

    const clearPostData = () => setSelectedPostData({
        id: -1,
        created_datetime:  new Date(),
        title: '',
        content: '',
        username: ''
    })

    const handlePostDataChange = (e: any) => {
        setSelectedPostData(oldValue => {
            const value = { ...oldValue }
            value[e.target.name.toLowerCase()] = e.target.value

            return value
        })
    }

    const modalProps = {
        clearPostData,
        handlePostDataChange,
        onConfirm,  
        selectedPostData,
        actionType
    }

    return (
        <Container>
            {posts.map(item => 
                <PostItem 
                    key={item.id} 
                    item={item}
                    isAuthor={item.username == username}  
                    deletePost={deletePost}
                    onDeletePost={item => selectPostAndAction(item, actionTypeEnum.delete)}
                    onEditPost={item => selectPostAndAction(item, actionTypeEnum.edit)}
                />
            )}
            <DeleteAndEditModals {...modalProps} />
        </Container>
    )
}

export default PostList

const Container = styled.div``

