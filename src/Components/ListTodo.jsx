import React from 'react'

const ListTodo = ({ todos, setTodos }) => {

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      }
    
      function deleteTodo(index) {
        const updatedTodos = todos.filter((element, i) => i !== index);
        setTodos(updatedTodos); 
      }
    
      function moveUp(index) {
        if (index > 0) {
          const updatedTodos = [...todos];
          [updatedTodos[index], updatedTodos[index - 1]] = [
            updatedTodos[index - 1],
            updatedTodos[index],
          ];
          setTodos(updatedTodos);
        }
      }
    
      function moveDown(index) {
        if (index < todos.length - 1) {
          const updatedTodos = [...todos];
          [updatedTodos[index], updatedTodos[index + 1]] = [
            updatedTodos[index + 1],
            updatedTodos[index],
          ];
          setTodos(updatedTodos);
        }
      }



  return (
    <div className="space-y-2">
        {todos.map((todo, index) => (
        <div key={index} className="rounded-2xl bg-white py-2 px-4">
            <div className="block sm:grid sm:grid-cols-3 sm:gap-2">
                <div className="flex gap-2 col-span-2">
                    <span 
                        className=" text-[20px] cursor-pointer "
                        onClick={() => toggleTodo(index)}
                    >
                        {todo.completed ? '✅' : '📌'}
                    </span>
                    <p 
                        className={` text-slate-900 text-[20px] cursor-pointer ${todo.completed ? 'line-through' : ''}`}
                        onClick={() => toggleTodo(index)}
                        style={{ wordBreak: 'break-all' }}
                    >
                    {todo.text}
                    </p>
                </div>
                <div className="flex justify-start sm:justify-end gap-2 items-center">
                    <button
                    className="bg-black rounded-lg text-white text-lg font-medium cursor-pointer px-3 py-1"
                    onClick={() => moveUp(index)}
                    >
                    ☝🏻
                    </button>
                    <button
                    className="bg-black rounded-lg text-white text-lg font-medium cursor-pointer px-3 py-1"
                    onClick={() => moveDown(index)}
                    >
                    👇🏻
                    </button>
                    <button
                    className="bg-red-600 rounded-lg text-white text-lg font-medium cursor-pointer px-3 py-1"
                    onClick={() => deleteTodo(index)}
                    >
                    ❌
                    </button>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ListTodo