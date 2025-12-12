import { useState } from 'react'
import TodoEdit from './TodoEdit'

function TodoItem({todo, onDelete, onEdit}) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = () => {
        onDelete(todo.id)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }

    // called by TodoEdit
    const handleSubmit = (newTitle) => {
        onEdit(todo.id, newTitle)
        setShowEdit(!showEdit)
    }

    const content = showEdit ? (
    <TodoEdit todo={todo} onSubmit={handleSubmit}/>
    ) : (
    <div>
        {todo.title}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>X</button>
    </div>
    )

    return (
        <div>
        {content}
        </div>
    )
    

    
}

export default TodoItem