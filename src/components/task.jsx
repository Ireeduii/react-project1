export const Task = (props) => {
  return (
    <div>
      <div className="w-[300px] h-[60px] bg-slate-200 rounded-md flex items-center gap-2 text-black p-3"></div>
      <input type="checkbox" />
      <p className={props.isCompleted && "line-through"}>{props.taskName}</p>
      {props.isCompleted ? (
        <button className="p-1 bg-red-200 text-red-300 rounded-xl">
          Delete
        </button>
      ) : (
        <button className="p-2  bg-red-200 text-blue-400 rounded-xl">
          Completed
        </button>
      )}
    </div>
  );
};
