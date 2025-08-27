import { AddButton } from "@/components";
import { Input } from "@/components/todoInput";
import { Task } from "@/components/todotask";
const Home = () => {
  const task = {
    taskName: "clean a home",
    isCompleted: false,
  };
  return (
    <div>
      <Task taskName={task.taskName} isCompleted={task.isCompleted}></Task>
      <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
        <div className="w-[380px] h-[300px] border rounded-md shadow-xl bg-white p-6">
          <h1 className="font-semibold text-black text-xl text-center mb-4">
            To-Do List
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <Input placeholder="Add new task.." />
            <AddButton></AddButton>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
              All
            </button>
            <button className="px-3 py-1 rounded bg-gray-100 text-black ">
              Active
            </button>
            <button className="px-3 py-1 rounded bg-gray-100 text-black">
              Completed
            </button>
          </div>

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
