import classnames from "classnames";
import "./styles.scss";

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (idx) => {
        if (!onTodoClick) return;
        onTodoClick(idx);
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, idx) => (
                <li key={todo.id}
                    className={classnames({
                        "todo-item": true,
                        "completed": todo.status === "completed"
                    })}
                    onClick={() => handleTodoClick(idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;