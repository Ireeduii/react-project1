const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[440px] p-6 bg-slate-50 rounded-xl text-center shadow-md">
        <h1 className="text-lg text-black font-bold mb-6">To-Do List</h1>

        <input
          className="w-full p-3 border text-black rounded-sm mb-4"
          type="text"
          placeholder="Add new task..."
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-sm text-[14px] mb-6">
          Add
        </button>

        <div className="space-x-2 mb-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-sm text-[14px]">
            All
          </button>
          <button className="text-black py-2 px-4 rounded-sm text-[14px]">
            Active
          </button>
          <button className="text-black py-2 px-4 rounded-sm text-[14px]">
            Completed
          </button>
        </div>

        <div className="w-full h-[60px] bg-slate-200 rounded-md flex items-center gap-2 text-black p-3 mb-6">
          <input type="checkbox" className="w-[15px] m-2" /> Create PR 2
        </div>

        <footer className="text-black mt-14 text-[12px]">
          Powered by <span className="text-blue-600">Pinecone Academy</span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
