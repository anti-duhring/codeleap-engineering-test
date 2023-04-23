import axios from 'axios'

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
    const req = await axios.get('https://dev.codeleap.co.uk/careers/');
    const data = req.data

    return data as TResponsePosts
}