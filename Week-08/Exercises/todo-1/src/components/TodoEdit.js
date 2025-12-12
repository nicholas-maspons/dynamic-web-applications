import { useState } from "react";

function TodoEdit({todo, onSubmit}) {

    // if we are gonna edit the todo, it should be set to what it is to begi with
    const [title, setTitle] = useState(todo.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(todo.id, title)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Update your Todo:</label>
            <input type="text" onChange={handleChange} value={title}/>
        </form>
    )
}

export default TodoEdit;