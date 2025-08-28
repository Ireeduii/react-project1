"use client";
import { useState } from "react";

const userNameList = ["Sarah", "Jigmid", "Nara"];
export default function Home() {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index + 1);
  };
  let user = userNameList[index];

  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="w-30 h-30 border rounded-md text-center">
        <button
          onClick={handleClick}
          className="my-5 mx-5 bg-blue-500 w-[40px] rounded-md"
        >
          Next
        </button>
        <p>{user}</p>
      </div>
      {count}
      <div className="w-30 h-30 border rounded-md">
        <button
          onClick={() => setCount(count + 1)}
          className=" bg-blue-500 w-[80px] rounded-md items-center "
        >
          Add count
        </button>
      </div>
    </div>
  );
}
