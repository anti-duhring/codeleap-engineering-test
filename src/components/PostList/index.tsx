import usePost from '@/hooks/usePost';
import styled from 'styled-components';
import PostItem from './PostItem';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import Modal from '../Modal';

const PostList = () => {
    const { username } = useAppSelector((state: RootState) => state.user.userData)
    const { 
        posts,
        deletePost 
    } = usePost()

    return (
        <Container>
            {posts.map(item => 
                <PostItem 
                    key={item.id} 
                    item={item}
                    isAuthor={item.username == username}  
                    deletePost={deletePost}
                />
            )}
            <Modal
                 title='Are you sure you want to delete this item?'
                 primaryButton='Delete'
                 showButton
            />
        </Container>
    )
}

export default PostList

const Container = styled.div``