import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { TPost } from '@/services/api/post';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import DeleteAndEditModals from './DeleteAndEditModals';
import PostItem from './PostItem';
import Loading from './Loading';

export type ActionType = actionTypeEnum

export enum actionTypeEnum {
    delete,
    edit
}

type Props = {
    posts: TPost[],
    deletePost: (id: number) => Promise<any>,
    editPost: (id: number, data: TPost) => Promise<any>,
    getMorePosts: () => Promise<any>
}

const PostList = (props: Props) => {
    const [actionType, setActionType] = useState<ActionType>(actionTypeEnum.delete)
    const [selectedPostData, setSelectedPostData] = useState<TPost | null>(null)

    const { username } = useAppSelector((state: RootState) => state.user.userData)

    const { 
        posts,
        deletePost,
        editPost,
        getMorePosts
    } = props;

    const selectPostAndAction = (item: TPost, type: ActionType) => {
        setActionType(type)
        setSelectedPostData({ ...item })
    }

    const onConfirm = async() => {
        if(!selectedPostData) return;

        if(selectedPostData.id > -1 && selectedPostData.username == username) {
            actionType == actionTypeEnum.delete ? 
            await deletePost(selectedPostData.id) :       
            await editPost(selectedPostData.id, selectedPostData)
        }
        clearPostData()
    }

    const clearPostData = () => setSelectedPostData(null)

    const handlePostDataChange = (e: any) => {
        setSelectedPostData(oldValue => {
            if(!oldValue) return null;

            const value = { ...oldValue }
            value[e.target.name.toLowerCase()] = e.target.value

            return value
        })
    }

    const modalProps = {
        handlePostDataChange,
        onConfirm,  
        onCancel: clearPostData,
        selectedPostData,
        actionType
    }

    return (
        <Container>
            <InfiniteScroll
                dataLength={posts.length}
                next={getMorePosts}
                hasMore={true}
                loader={<Loading />}
            >
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
            </InfiniteScroll>
            <DeleteAndEditModals {...modalProps} />
        </Container>
    )
}

export default PostList

const Container = styled.div``

