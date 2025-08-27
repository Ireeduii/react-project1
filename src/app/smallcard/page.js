const Card = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="w-[450px] h-[540px] bg-white rounded-3xl border p-10">
        <h2 className="text-indigo-600 font-semibold">Hobby</h2>
        <p className="mt-4  text-5xl font-semibold gap-x-2">
          $29<span className="items-end text-base text-gray-500 ">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          The perfect plan if you're just getting started with our product.
        </p>
        <ul className="mt-8 space-y-3 text-sm/6 text-gray-600">
          {[
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
          ].map((el, index) => {
            return (
              <li key={index} className="flex gap-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-600"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                {el}
              </li>
            );
          })}
        </ul>
        <button className="mt-8 rounded-md text-indigo-600 font-semibold w-full border bg-indigo-300 px-3.5 py-2.5 hover:inset-ring">
          Get started today
        </button>
      </div>
    </div>
  );
};
export default Card;
