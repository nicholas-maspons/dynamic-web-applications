import {useState, useEffect} from 'react'
// useEffect allows us to control when a function is called
import axios from 'axios'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    // string is from http file
    const response = await axios.get('http://localhost:3001/todos')
    // response has the data, pragma, etc. we want data
    setTodos(response.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {
      // weve used to have a headers object to pass auth, but we dont need that this time, so
      // we just pass the body of our request
      
      // we know its title bc we made the api
      // title: title
      title,

      // we get the newly creating object back, so we will add it
    })

    const updatedTodos = [
      ...todos,
      response.data,
    ]
    setTodos(updatedTodos)
  }


  const deleteTodoById = async (id) => {
    // response returns an empty object, so we wont be using it
    await axios.delete(`http://localhost:3001/todos/${id}`)

    // update our local state the same way

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const response = await axios.get(`http://localhost:3001/todos/${id}`, {
      title: newTitle
    })

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          // bc it returns the newly updated object
          ...response.data
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  )
}

export default App
