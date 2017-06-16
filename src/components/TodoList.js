import React from "react";

import TodoCard from "./TodoCard";

const TodoList = ({todos, onTodoCardClick, onDeleteTodoClick}) => (
    <div>
        {todos.map(todo =>
            <TodoCard
                key={todo.id}
                todo={todo}
                onClick={onTodoCardClick}
                onDeleteClick={onDeleteTodoClick}
            />
        )}
    </div>
)

export default TodoList

