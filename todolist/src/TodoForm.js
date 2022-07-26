import {useState} from 'react'


const TodoForm = (props) => {
  
    const [textTodo,setTextTodo] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.addTodo(textTodo)
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTextTodo(e.target.value)} />
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm