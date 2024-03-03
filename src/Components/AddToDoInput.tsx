
type PropTypes = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addToDo: () => void
}

const AddToDoInput:React.FC<PropTypes> = ({todo, setTodo, addToDo}) => {
  return (
    <div className="my-8 flex items-center justify-center">
            <input className=" border border-gray-400 p-2 px-3 rounded-lg w-9/12" value={todo} placeholder="To Do giriniz..." onChange={e => setTodo(e.target.value)} type="text"/>
<button className="w-2/12 p-2 ml-4 text-white font-semibold py-2 rounded-lg bg-slate-500" onClick={addToDo}>Ekle</button>
    </div>
  )
}

export default AddToDoInput 