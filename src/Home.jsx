import React, { useState } from "react";
import ListTodo from "./Components/ListTodo";
import Create from "./Components/Create";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  

  return (
    <div className="bg-gray-600 w-full max-w-2xl p-7 min-h-[550px] rounded-2xl">
      <h1 className="text-4xl font-semibold mb-6 "> 📝 To-Do List</h1>
      <Create  todos={todos} setTodos={setTodos} setValue={setValue} value={value}/>
      <ListTodo todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Home;