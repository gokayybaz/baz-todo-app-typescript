import { useState } from 'react'
import './App.css'
import AddToDoInput from './Components/AddToDoInput'
import { Todo } from './Types/types'
import ListTodos from './Components/ListTodos'


function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const addToDo = () => {
    if(todo) setTodos([...todos, {id: todos.length + 1, title: todo}])
    setTodo('')
  }

  const deleteTodo = (id:number) => {
    setTodos(    todos.filter(todo => todo.id != id)
    )
  }


  return (
    <main className=' h-screen flex items-center justify-center'>
      <div className='w-2/4 h-3/4 bg-slate-200 rounded-xl p-8'>
        <div className='flex items-center justify-center'><h1 className='font-bold text-2xl'>Baz To Do App</h1></div>
        <div>
          <AddToDoInput todo={todo} setTodo={setTodo} addToDo={addToDo}/>
        </div>
        <div>
          <ListTodos todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  )
}

export default App
 