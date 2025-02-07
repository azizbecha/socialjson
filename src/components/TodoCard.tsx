import { FaCheckCircle } from "react-icons/fa";
import { Todo } from "@/interfaces"

interface Props {
    todo: Todo;
}

const TodoCard: React.FC<Props> = ({ todo }) => {
    return (
        <div className="p-4 rounded-md shadow-md hover:shadow-lg transition-all">
            <h3 className="text-base font-semibold">
                {todo.title}
            </h3>
            <p className="flex items-center gap-1">Status: <FaCheckCircle color={todo.completed ? 'green' : 'red'} /></p>
        </div>
    )
}

export default TodoCard