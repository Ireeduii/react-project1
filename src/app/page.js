const Home = () => {
  return (
    <div className="white w-full h-screen flex justify-center items-center">
      <div className="w-[450px] h-[540px] bg-gray-800 border border-black rounded-3xl p-10 ">
        <h3 className="text-indigo-400 font-semibold">Enterprise</h3>
        <p className="mt-4 ">
          $99<span>month</span>
        </p>
        <p>Dedicated support and infrastructure for your company.</p>
        <ul>
          <li>Unlimited products</li>
        </ul>
        <button>Get startted today</button>
      </div>
    </div>
  );
};

export default Home;
