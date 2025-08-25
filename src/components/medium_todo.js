"use client";

import { useState } from "react";

export const MediumToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
  };
  const handleDeleteToDo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };
  return (
    <div className="border w-60 h-40 text-center mt-10 ml-10 rounded-2xl bg-indigo-100 pt-3">
      <h2 className="font-semibold">Todo List</h2>
      <div>
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="typing..."
          className="mt-2"
        ></input>
        <button onClick={handleAddTodo} className="pl-2">
          Add
        </button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo} <button onClick={() => handleDeleteToDo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
