export const Task = (props) => {
  return (
    <div>
      <input className="w-[200px] bg-white" />
      <p>{props.taskName}</p>
      {props.isCompleted && }
    </div>
  );
};
