// export const Input = (props) => {
//   return (
//     <div>
//       <input className="w-80 h-80 bg-gray-400">{props.input}</input>
//     </div>
//   );
// };
import { useState } from "react";
export function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="p-4 border rounded text-center">
      <h2 className="text-xl font-bold mb-2">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      ></button>
    </div>
  );
}
export default Counter;
