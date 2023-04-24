import { TPostData } from '@/components/CreatePostForm'
import { 
    TPost, 
    createPost as create, 
    getPosts as get, 
    deletePost as deleteP,
    editPost as edit
} from '@/services/api/post'
import { useState, useEffect } from 'react'
import useCachePosts from './useCachePosts'

type TUsePostConfig = {
    fetchInitialData?: boolean
}

const usePost = (usePostConfig?: TUsePostConfig) => {
    const { 
        putDataOnCache,
        getDataFromCache,
        deleteDataFromCache,
        saveNextPage,
        getNextPage,
        savePostsCount
    } = useCachePosts()

    const [posts, setPosts] = useState<TPost[]>([])

    const config = usePostConfig || { 
        fetchInitialData: false
    }

    useEffect(() => {
        if(!config.fetchInitialData) return
        
        getPosts()
    },[])

    const createPost = async(data: TPostData) => {
        await create(data)
        await getFreshPosts()
    }

    const getFreshPosts = async() => {
        const { count, next, results } = await get()
        
        savePostsCount(count)
        saveNextPage(next)

        await putDataOnCache(results)
        await getPosts()
    }

    const getPosts = async() => {
        const cachedData = await getDataFromCache()

        if(cachedData?.length) {
            setPosts(sortPosts(cachedData))
            return 
        }

        await getFreshPosts()
    }

    const deletePost = async(id: number) => {
        await deleteP(id)
        await deleteDataFromCache(id)
        await getPosts()
    }

    const editPost = async(id: number, data: TPost) => {
        const { username, title, content } = data

        await edit(id, { username, title, content })

        await putDataOnCache([data])
        await getPosts()
    }

    const getMorePosts = async() => {
        const nextPage = await getNextPage()

        if(!nextPage) return

        const { 
            count, 
            next, 
            results 
        } = await get(nextPage)

        savePostsCount(count)
        setPosts(oldPosts => sortPosts([...oldPosts, ...results]))

        await saveNextPage(next)
        await putDataOnCache(results)
    }

    const sortPosts = (posts: TPost[] = []) => {
        return [...posts].sort((a, b) => {
            const dateA = new Date(a.created_datetime)
            const dateB = new Date(b.created_datetime)

            return dateB.getTime() - dateA.getTime()
        })

    }

    return {
        posts,
        createPost,
        getPosts,
        deletePost,
        editPost,
        getMorePosts,
        getFreshPosts
    }
}

export default usePost