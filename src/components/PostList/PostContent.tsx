import styled from "styled-components"
import { Props } from "./PostItem"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)

const PostContent = (props: Props) => {
    const { 
        username, 
        created_datetime,
        id,
        title,
        content
    } = props.item 

    const timeAgo = new TimeAgo('en-US')
    const date = timeAgo.format(new Date(created_datetime))

    return (
        <Container>
            <Info>
                <Username>@{username}</Username>
                <DateInfo>{date}</DateInfo>
            </Info>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default PostContent

const Container = styled.div``

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`

const Username = styled.span`
    font-weight: 700;
    color: #777777;
`

const DateInfo = styled.span`
    color: #777777;
`
const Content = styled.div`
    margin-top: 1rem;
    white-space: break-spaces;
`

