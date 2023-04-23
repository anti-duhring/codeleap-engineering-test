import { TPost, getPosts } from '@/services/api/post'
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
        .then(data => {
            const { count, next, previous, results } = data

            setCount(count)
            setNextAndPreviousPage({ next, previous })
            setPosts(results)
        })
    },[])

    return {
        posts
    }
}

export default usePost