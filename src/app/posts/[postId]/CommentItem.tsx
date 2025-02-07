import { FaCommentAlt } from "react-icons/fa";
import { Comment } from "@/interfaces"

interface Props {
    comment: Comment;
}

const CommentItem: React.FC<Props> = ({ comment }) => {
    return (
        <div className="flex flex-row items-center justify-start gap-2 border border-gray-200 p-4 mb-2 rounded-lg shadow hover:shadow-md transition-all">
            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-primary text-white flex-none">
                <FaCommentAlt className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-lg text-primary">{comment.name}</span>
                <p className="text-sm text-gray-700 mt-1">{comment.body}</p>
            </div>
        </div>
    )
}

export default CommentItem;
