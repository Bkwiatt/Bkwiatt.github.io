import React from 'react'
import { TodoInput, TodoItemContainer, TodoHr } from './todoListElements'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <TodoItemContainer>
            <label>
                <TodoInput type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
                <TodoHr />
            </label>
        </TodoItemContainer>
    )
}
