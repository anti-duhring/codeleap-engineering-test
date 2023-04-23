import usePost from '@/hooks/usePost';
import styled from 'styled-components';

const PostList = () => {
    const { posts } = usePost()

    return (
        <Container>
            <ul>
            {posts.map(i => 
                <li key={i.id}>
                    {i.content} <br />
                    By {i.username}
                </li>
            )}
            </ul>
        </Container>
    )
}

export default PostList

const Container = styled.div``