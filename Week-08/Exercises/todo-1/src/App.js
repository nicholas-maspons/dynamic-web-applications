import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";


// our central head quarters for all data

function App() {

  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    // console.log('Create todo: ', title)

    // NEEVER todos.push({title: title})

    // create a new Array
    // copy paste aka spread the old values in first
    // add new, or override values last (so it is the equivalent of push)
    const updatedTodos = [
      ...todos,
      // {id: Math.round(Math.random() * 99999), title: title}
      {id: Math.round(Math.random() * 99999), title}
    ]
    setTodos(updatedTodos)
    console.log(updatedTodos)
  }

  // id is going to come from todoItem
  // best way to delete is to use array.filter
  const deleteTodoById = (id) => {
    // we will return the ones wehre the condition is true for the item
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle
        }
      } 
      return todo
    })
    setTodos(updatedTodos)
    
  }

  return (
    <div> 
      {/* createTodo is called onCreate in the child */}
      <TodoCreate onCreate={createTodo}/>

      <TodoList todos={todos} onDelete={deleteTodoById} onSubmit={editTodoById}/>
    </div>
  );
}

export default App;
