import CommentItem from "./CommentItem";
import { Comment } from "@/interfaces";

interface Props {
    comments: Comment[];
}

const Comments: React.FC<Props> = ({comments}) => {
    return (
        <div className="gap-4 mt-4">
            <h3>Comments</h3>
            {comments.map((comment, key) => <CommentItem comment={comment} key={key} />)}
        </div>
    )
}

export default Comments;
