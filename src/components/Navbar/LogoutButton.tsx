import { logoutUserAction } from "@/actions/userActions"
import useCachePosts from "@/hooks/useCachePosts"
import { useAppDispatch } from "@/redux/hooks"
import styled from "styled-components"

const LogoutButton = () => {
    const { clearDataFromCache } = useCachePosts()
    const dispatch = useAppDispatch()

    const handleClick = async() => {
        await clearDataFromCache()
        dispatch(logoutUserAction())
    }

    return (
        <Container>
            <Button onClick={handleClick}>
                LOGOUT
            </Button>
        </Container>
    )
}

export default LogoutButton

const Container = styled.div``

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    transition: .3s;
    padding: .5rem;
    width: 5rem;
    border-radius: 16px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`