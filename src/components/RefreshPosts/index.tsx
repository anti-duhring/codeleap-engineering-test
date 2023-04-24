import styled, { keyframes } from "styled-components"
import AutorenewIcon from '@mui/icons-material/Autorenew';
import IconButton from "../Form/IconButton";
import { useState } from "react";

type Props = {
    onRefresh: () => Promise<any>
}
const RefreshPosts = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async() => {
        setIsLoading(true)
        await props.onRefresh()
        setIsLoading(false)
    }

    return (
        <Container>
            <IconButton
                icon={
                    <AnimatedSpan isLoading={isLoading} >
                        <AutorenewIcon fontSize='large' />
                    </AnimatedSpan>
                }
                color='#7695EC'
                onClick={handleClick}
            />
        </Container>
    )
}

export default RefreshPosts

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 1rem;
`

const AnimatedSpan = styled.div<{ isLoading: boolean }>`
    animation-name: ${props => props.isLoading && rotate360};
    animation-duration: .7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`