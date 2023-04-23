import { TPostData } from "@/components/CreatePostForm"
import { axios } from "./config"

export type TPost = {
    id: number
    username: string,
    created_datetime: Date,
    title: string,
    content: string
}

export type TResponsePosts = {
    count: number,
    next: string | null,
    previous: string | null,
    results: TPost[]
}

export const getPosts = async() => {
    try {
        const req = await axios.get('/careers/');
        const data = req.data

        return data as TResponsePosts
    } catch(err) {
        throw err
    }
}

export const createPost = async(postData: TPostData) => {
    try {
        const req = await axios.post('/careers/', postData)
        const data = req.data

        return data
    } catch(err) {
        throw err
    }
}

export const deletePost = async(id: number) => {
    try {
        const req = await axios.delete(`/careers/${id}/`)
        const data = req.data

        return data
    } catch(err) {
        throw err
    }
}