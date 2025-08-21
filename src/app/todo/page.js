import {} from "@/components";
const Home = () => {
  return (
    <div className="   ">
      <div className="w-110 h-120 bg-slate-50 rounded-xl text-center">
        <h1 className="text-lg text-black font-bold mt-10 p-6 ">To-Do List</h1>
        <br></br>
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
export default Home;

// import React from "react";
// // import Todo from "./Todo";
// function App() {
//   return <Todo tasks={[]} />;
// }
// export default App;
