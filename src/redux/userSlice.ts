import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// const persistedState = window.localStorage.getItem('persist:root')
//     ? JSON.parse(window.localStorage.getItem('persist:root') ?? '')
//     : { name: 'Anonymous', id: 0 }

export const slice = createSlice({
    name: 'user',
    initialState: {
        userData: { username: 'anonymous', id: 0 },
        isLogged: false
    },
    reducers: {
        login(state, { payload }) {
            return {
                ...state,
                isLogged: true,
                userData: payload
            }
        },
        logout(state) {
            return {
                ...state,
                isLogged: false,
                userData: {
                    username: 'anonymous',
                    id: 0
                }
            }
        }
    }
})

export const { login, logout } = slice.actions

export const getUser = (state: RootState) => state.user.userData

export default slice.reducer