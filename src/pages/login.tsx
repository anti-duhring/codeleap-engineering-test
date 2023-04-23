import { loginUserAction } from "@/actions/user/loginUserAction";
import InputText from "@/components/Form/InputText";
import Modal from "@/components/Modal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function Login() {
    const [username, setUsername] = useState('')
    const dispatch = useAppDispatch()
    const { isLogged } = useAppSelector(state => state.user)
    const router = useRouter()

    const handleChangeUsername = (e: any) => setUsername(e.target.value)

    const handleClickButton = (e: any) => {
        e.preventDefault();
        dispatch(loginUserAction(username));
    }

    useEffect(() => {
        if(isLogged) {
            router.push('/')
        }
    }, [isLogged])

    return (
        <>
            <Head>
                <title>Login - CodeLeap Network</title>
            </Head>
            <main>
                <Modal
                    title='Welcome to CodeLeap network!'
                    buttonTitle="ENTER"
                    onClickButton={handleClickButton}
                    showButton
                >
                    <>
                        <p>Please enter your username</p>
                        <InputText
                            placeholder="John  Doe"
                            value={username}
                            onChange={handleChangeUsername}
                        />
                    </>
                </Modal>
            </main>
        </>
    )
}