import TodoItem from "./TodoItem"

function TodoList({todos, onDelete, onEdit}) {
    
    const renderedTodos = todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
    })
    
    return (
    <div>
        {renderedTodos}
    </div>
    )

    
}

export default TodoList