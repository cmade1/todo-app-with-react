import React from 'react'

const Create = ({setTodos ,todos , setValue ,value}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };
    
    const addTodo = (todo) => {
        if (todo.trim() !== "") {
            setTodos([...todos, { text: todo, completed: false }]);
        }
    };

  return (
    <form
        onSubmit={handleSubmit}
        className="sm:flex mb-8 bg-white rounded-2xl p-2"
      >
        <input
          type="text"
          className="bg-transparent border rounded-2xl sm:flex-1 h-14 pl-6 pr-2 mr-2 text-lg placeholder:text-slate-400"
          placeholder="Enter a Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="border-none rounded-full bg-black w-32 h-14 text-white text-lg font-medium cursor-pointer px-4"
        >
          Add
        </button>
      </form>
  )
}

export default Create