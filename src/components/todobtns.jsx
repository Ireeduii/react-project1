<<<<<<< HEAD
export const Buttons = () => {
  return (
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
=======
export const Buttons = (props) => {
  return (
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700">
>>>>>>> ebe2202078d4481db1d44752c3d776e78c009633
        All
      </button>
      <button className="px-3 py-1 rounded bg-gray-100 text-black ">
        Active
      </button>
      <button className="px-3 py-1 rounded bg-gray-100 text-black">
        Completed
      </button>
<<<<<<< HEAD
=======
      {props.children}
>>>>>>> ebe2202078d4481db1d44752c3d776e78c009633
    </div>
  );
};
