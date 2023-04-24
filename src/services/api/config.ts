import { default as ax } from 'axios'

export const baseURL = 'https://dev.codeleap.co.uk'

export const postsEndpoint = `${baseURL}/careers/`

export const axios = ax.create({
    baseURL
})
