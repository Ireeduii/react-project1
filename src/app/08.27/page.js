// import { Henny_Penny } from "next/font/google";
"use client";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleFilteStatus = (status) => {
    setFilterStatus(status);
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToDo = () => {
    setTodos([...todos, { title: inputValue, isDone: false }]);
  };

  const handleChangeCheckbox = (event, index) => {
    const newTodos = todos.filter((todo, i) => {
      if (i === index) todo.isDone = event.target.checked;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);

    setTodos(newTodos);
  };

  return (
    <div className="bg-gray-400 w-full h-screen">
      <div className="mt-4">
        <input onChange={handleOnChange} type="text" />
        <button onClick={handleAddToDo}>Add</button>
      </div>
      <div className="ml-9 mt-4 flex gap-3">
        <button
          onClick={() => handleFilteStatus("All")}
          className={
            "bg-gray-500 rounded-md text-white " +
            `${filterStatus === "All" ? "!bg-blue-500" : ""}`
          }
        >
          All
        </button>
        <button
          onClick={() => handleFilteStatus("Active")}
          className={
            "bg-gray-500 rounded-md text-white " +
            `${filterStatus === "Active" ? "!bg-blue-500" : ""}`
          }
        >
          Active
        </button>
        <button
          onClick={() => handleFilteStatus("Completed")}
          className={
            "bg-gray-500 rounded-md text-white " +
            `${filterStatus === "Completed" ? "!bg-blue-500" : ""}`
          }
        >
          Completed
        </button>
      </div>

      {todos.map((todo, index) => (
        <div key={index} className="flex items-center gap-3 w-fit border-black">
          <input
            onChange={(event, index) => handleChangeCheckbox(event, index)}
            type="checkbox"
            defaultChecked={todo.isDone}
            className="mt-3"
          />
          <p>{todo.title}</p>
          <button
            onClick={() => handleDeleteTodo(index)}
            className="bg-red-300 rounded-md mt-3"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
