import { postsEndpoint } from '@/services/api/config';
import { TPost } from '@/services/api/post';
import { clearDataFromDB, createDB, deleteDataFromDB, getDataFromDB, putDataToDB } from '@/services/indexedDB';

const useCachePosts = () => {

    const config = {
        dbName: 'posts',
        storeName: 'posts',
        keyPath: 'id'
    }

    const connect = async() => {
        const response = await createDB(config)

        return response as IDBDatabase
    }

    const putDataOnCache = async(data: TPost[]) => {
        const db = await connect()

        if(!db) return

        await putDataToDB({
            data,
            db,
            storeName: config.storeName
        })

        const response = await getDataFromCache()

        return response
    }

    const getDataFromCache = async() => {
        const db = await connect()

        if(!db) return

        const response = await getDataFromDB({
            db,
            storeName: config.storeName,
        }) as TPost[]

        return response 
    }

    const deleteDataFromCache = async(id: number) => {
        const db = await connect()

        if(!db) return

         await deleteDataFromDB({
            db,
            storeName: config.storeName,
            keyPath: id
        }) as TPost[]

        const response = await getDataFromCache()

        return response
    }

    const clearDataFromCache = async() => {
        const db = await connect()

        if(!db) return

        await clearDataFromDB({
            db,
            storeName: config.storeName
        })
    }

    const saveNextPage = async(data: any) => {
        await Promise.resolve(
            localStorage.setItem('nextPage', JSON.stringify(data))
        )
    }

    const getNextPage = async() => {
        const data = await Promise.resolve(localStorage.getItem('nextPage'))

        if(!data) return postsEndpoint

        return JSON.parse(data) as any
    }

    const savePostsCount =  async(count: number) => {
        await Promise.resolve(
            localStorage.setItem('postsCount', JSON.stringify(count))
        )
    }

    const getPostsCount = async() => {
        const data = await Promise.resolve(localStorage.getItem('postsCount'))

        if(!data) return 0

        return JSON.parse(data) as number
    }

    return {
        putDataOnCache,
        getDataFromCache,
        deleteDataFromCache,
        saveNextPage,
        getNextPage,
        savePostsCount,
        getPostsCount,
        clearDataFromCache
    }
}

export default useCachePosts