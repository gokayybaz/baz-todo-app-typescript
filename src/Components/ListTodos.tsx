import { useState } from "react"
import { Todo } from "../Types/types"

type Props = {
    todos: Todo[],
    deleteTodo: (id:number) => void,
}




const ListTodos:React.FC<Props> = ({todos, deleteTodo}) => {
  return (
    <ul>
        {
            todos.map((todo, index) => <li className=" my-6 bg-slate-50 p-5 px-6 rounded-lg flex items-center justify-between" key={index}>
                <p className="bg-slate-50 font-semibold w-11/12">{todo.title}</p><div>
                <button className="bg-red-500 py-1 px-3 rounded-lg text-white font-semibold" onClick={() => deleteTodo(todo.id)}>X</button>
                </div>
            </li>)
        }
    </ul>
  )
}

export default ListTodos