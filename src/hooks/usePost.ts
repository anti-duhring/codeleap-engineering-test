import { TPostData } from '@/components/CreatePostForm'
import { 
    TPost, 
    createPost as create, 
    getPosts as get, 
    deletePost as deleteP,
    editPost as edit
} from '@/services/api/post'
import { useState, useEffect } from 'react'

const usePost = () => {
    const [count, setCount] = useState(0)
    const [nextAndPreviousPage, setNextAndPreviousPage] = useState<{
        next: string | null,
        previous: string | null
    }>({
        next: null,
        previous: null
    })
    const [posts, setPosts] = useState<TPost[]>([])

    useEffect(() => {
        getPosts()
    },[])

    const createPost = async(data: TPostData) => {
        await create(data)
        await getPosts()
    }

    const getPosts = async() => {
        const data = await get()

        const { count, next, previous, results } = data

        setCount(count)
        setNextAndPreviousPage({ next, previous })
        setPosts([...results])
    }

    const deletePost = async(id: number) => {
        await deleteP(id)
        await getPosts()
    }

    const editPost = async(id: number, data: TPostData) => {
        await edit(id, data)
        await getPosts()
    }

    return {
        posts,
        createPost,
        getPosts,
        deletePost,
        editPost
    }
}

export default usePost