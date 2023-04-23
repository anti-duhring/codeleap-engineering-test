import styled from "styled-components"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Props } from "./PostItem";
import IconButton from "../Form/IconButton";
import { useState } from "react";

const PostHeader = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const handleDelete = async(e: any) => {
        setIsLoading(true)
        await props.deletePost(props.item.id)
        setIsLoading(false)
    }

    return (
        <Container>
            <PostTitle>{props.item.title}</PostTitle>
            {props.isAuthor && 
                <PostButtons>
                    <IconButton
                        icon={<DeleteForeverIcon />}
                        onClick={handleDelete}
                    />
                    <IconButton
                        icon={<EditIcon />}
                    />
                </PostButtons>
            }
        </Container>
    )
}

export default PostHeader

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`
const PostTitle = styled.h3`
    margin: 0;
    padding: 0;
`
const PostButtons = styled.div`
    display: flex;
`