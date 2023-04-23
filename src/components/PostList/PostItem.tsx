import { TPost } from "@/services/api/post"
import Paper from "../Paper"
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

export type Props = {
    item: TPost;
    isAuthor: boolean;
    deletePost: (id: number) => Promise<void>;
    onDeletePost: (params: any) => void;
    onEditPost: (params: any) => void;
}
const PostItem = (props: Props) => {
    return (
        <Paper
            header={<PostHeader {...props} />}
        >
            <PostContent {...props} />
        </Paper>
    )
}


export default PostItem