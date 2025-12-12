// BARE MIMINMI FOR INPUT BINDING 

import { useState } from "react"

function TodoCreate({onCreate}) {
    
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }
    
    return (
    <form onSubmit={handleSubmit}>
        {/* we are binding */}
        <input type="text" value={title} onChange={handleChange}/>
        {/* if there s a button inside a form it will submit. and if you click enter on an input, the form will also submit */}
        <button>Create </button>
    </form>
        
    
    )

}

export default TodoCreate