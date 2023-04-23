import { login as loginAction } from '@/redux/userSlice';
import { TUsername, login } from '@/services/api/user';
import { Dispatch } from 'redux';

export enum LoginUserAction {
    Request = 'LoginUserRequestAction',
    Success = 'LoginUserSuccessAction',
    Failure = 'LoginUserFailureAction'
}

export const loginUserAction = (username: TUsername) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: LoginUserAction.Request })

        const userData = await login(username)

        dispatch(loginAction(userData))

    } catch(err) {
        dispatch({
            type: LoginUserAction.Failure,
            payload: null
        })

        throw err;
    }
}