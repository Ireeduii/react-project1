export const AddButton = (props) => {
  return (
    <div>
      <button
        // onClick={props.onClick}
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {props.children}Add
      </button>
      {/* <button
        type="button"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={props.onClick}
      >
        {props.text} */}

      {/* </button> */}
    </div>
  );
};
