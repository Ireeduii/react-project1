"use client";
import { useState } from "react";

import { AddButton } from "@/components";
import { Buttons } from "@/components/todobtns";
import { Input } from "@/components/todoInput";
// import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleAddToDo = () => {
    setTodos([...todos, { title: inputValue, isDone: false }]);
  };

  return (
    <div>
      {/* <Task taskName={task.taskName} isCompleted={task.isCompleted}></Task> */}
      <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
        <div className="w-[380px] h-[300px] border rounded-md shadow-xl bg-white p-6">
          <h1 className="font-semibold text-black text-xl text-center mb-4">
            To-Do List
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <Input placeholder="Add new task.." />
            <AddButton></AddButton>
          </div>

          <Buttons></Buttons>

          <p className="text-[#6B7280] text-center text-[17px] mt-6 m">
            No tasks yet. Add one above!
          </p>
          <p className="text-[#6B7280] text-[15px] text-center mt-10 ">
            Powered by
            <span className="text-[#3B73ED] pl-2 ">Pinecone Academy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
