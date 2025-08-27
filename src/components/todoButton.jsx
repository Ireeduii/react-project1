export const AddButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {props.children}Add
      </button>
    </div>
  );
};
