import {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const App = () => {
  
  const [todos,setTodos] = useState([])

  const addTodo = (text) =>{

    let id = 1;

    if(todos.length > 0){
      id = todos[0].id +1;
    }

    const newTodo = {
      id:id,
      text:text,
      key:id,
      complete:false,
    }

    setTodos(() => [newTodo, ...todos])

  }

  const handleDelete = (theId) => {
      const updatedTodos = todos.filter((el) => el.id !== theId)
      setTodos(updatedTodos)
  }

  const handleComplete = (theId) =>{
    const updatedTodos = todos.map((el) => {
      if(el.id == theId){
        el.complete = !el.complete
      }
      return el;
    })
    setTodos(updatedTodos)
}


  const elements = todos.map((el) => (
    <TodoItem 
      id={el.id}
      text={el.text}
      key={el.id}
      handleDelete={handleDelete}
      handleComplete= {handleComplete}
      complete={el.complete}
    />
  ))

  return (
    <div className='App'>
      <div className='form'>
        <h1 className='title'>Todo List</h1>
        <TodoForm  addTodo={addTodo} />
      </div>
      <div className='elements'>
         {elements} 
      </div>
    </div>
  )
}

export default App