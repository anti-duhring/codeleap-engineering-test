export type TUsername = string
export type TUser = {
    username: TUsername,
    id: number
}

export const login = async(username: TUsername) => {
    const userData: TUser = await Promise.resolve({
        username,
        id: 1
    })

    return userData
}