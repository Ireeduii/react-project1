// // "use client";
// // import React from "react";
// import { Button } from "@/components";
// // import Button from "./Button";
// // export default function Page() {

// let tasks = [
//   { id: 1, title: "Гэрээ цэвэрлэх", done: "no" },
//   { id: 2, title: "Хоол хийх", done: "yes" },
// ];

// const handleAdd = () => {
//   const input = document.getElementById("taskInput");
//   if (input.value.trim() === "") return;
//   const newTask = {
//     id: Date.now(),
//     title: input.value,
//     done: "no",
//   };
//   tasks.push(newTask);

//   input.value = "";
// };

// const handleToggle = (task) => {
//   task.done = task.done === "yes" ? "no" : "yes";
// };

// const handleDelete = (id) => {
//   tasks = tasks.filter((t) => t.id !== id);
// };
// return (
//   <div className="flex flex-col items-center mt-10">
//     <h1 className="text-2xl font-bold mb-4">To-Do list</h1>

//     <div className="flex gap-2">
//       <input
//         id="taskInput"
//         type="text"
//         placeholder="Add a new task..."
//         className="border px-2 py-1 rounded"
//       />
//       <Button text="Add" onClick={handleAdd} color="blue" />
//     </div>

//     <ul className="mt-4 w-64">
//       {tasks.map((task) => (
//         <li
//           key={task.id}
//           className="flex items-center justify-between border-b py-2"
//         >
//           <div>
//             <input
//               type="checkbox"
//               defaultChecked={task.done === "yes"}
//               onChange={() => handleToggle(task)}
//               className="mr-2"
//             />
//             {task.title}
//           </div>

//           {task.done === "yes" && (
//             <Button
//               text="Delete"
//               onClick={() => handleDelete(task.id)}
//               color="red"
//             />
//           )}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default handleAdd;
// import {} from "@/components";
// const Home = () => {
//   return (
//     <div>
//       <div className="w-110 h-120 bg-slate-50 rounded-xl text-center">
//         <h1 className="text-lg text-black font-bold mt-10 p-6 ">To-Do List</h1>

/* <br></br>

        <input
          className="p-3 border text-black"
          type=" text-black rounded-sm"
          placeholder="Add new task..."
        ></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-black py-2 px-4 rounded-sm mt-5 text-[14px]">
          Add
        </button>
        <br></br>

        <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-sm mt-10 text-[14px]">
          All
        </button>

        <button className=" text-black  py-2 px-4 rounded-sm text-[14px]">
          Active
        </button>

        <button className=" text-black  py-2 px-4 rounded-sm text-[14px]">
          Completed
        </button>

        <div className="w-110 h-[60px] bg-slate-200 rounded-md flex items-center gap-2 text-black p-3">
          <input type="checkbox" className="w-[15px] m-2" /> Create PR 2
        </div>

        <p className="text-black mt-11 text-[14px]">
          No tasks yet. Add one above!
        </p>
        <footer className="text-black mt-14 text-[12px]">
          Powered by <span className="text-blue-600">Pinecone academy</span>
        </footer>
      </div>
      <div className="w-110 h-100"></div>
    </div>
  );
};
export default Home; */
"use client";
import { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState("false");

  const handleSubmit = () => {
    setSubmitted("true");
    // console.log(handleSubmit, "handle");
  };
  return (
    <div className="bg-black">
      <input
        className="border rounded-md"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        className="border rounded-md"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && <p>Form Submitted!</p>}
    </div>
  );
}
export default Form;
// "use clent";
// import { useState } from "react";

// const TodoPage = () => {
//   const [todos, setTodos] = useState([]);

//   const handleOnChange = (event) => {

//   };
//   const handleOnClick =() => {
//     setTodos()
//   }
//   return (
//     <div>
//       <input type="text" placeholder="Add todo" onChange={handleOnChange} />
//       <button>Add</button>
//     </div>;
//   );
// };
