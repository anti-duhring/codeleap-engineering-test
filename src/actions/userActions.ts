import { login as loginAction, logout } from '@/redux/userSlice';
import { TUsername, login } from '@/services/api/user';
import { Dispatch } from 'redux';

export const loginUserAction = (username: TUsername) => async (dispatch: Dispatch<any>) => {
    try {

        const userData = await login(username)

        dispatch(loginAction(userData))

    } catch(err) {

        throw err;
    }
}

export const logoutUserAction = () => (dispatch: Dispatch<any>) => {
    dispatch(logout())
}