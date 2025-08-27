const cardData = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center ">
      <div className=" bg-gray-800 rounded-4xl border border-white p-10 ">
        <h2 className="text-indigo-400 font-semibold">Enterprise</h2>
        <p className="mt-4 font-semibold text-5xl text-white ">
          $99<span className="items-end text-base text-gray-400">/month</span>
        </p>
        <p className="text-gray-300 mt-6 text-base">
          Dedicated support and infrastructure for your company.
        </p>
        <ul className="mt-8 text-gray-300 flex flex-col gap-3">
          {[
            "Unlimited products",
            "Unlimited subscribes",
            "Advenced analytics",
            "Dedicated support representative",
          ].map((el, index) => {
            // 2-s deesh dvtagdaj bga uyd map ashiglana
            return (
              <li key={index} className="flex gap-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-indigo-600"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                {el}
              </li>
            );
          })}
        </ul>
        <button className="w-full rounded-md bg-indigo-400 mt-8 py-2.5 px-3.5">
          Get started
        </button>
      </div>
    </div>
  );
};
export default cardData;
