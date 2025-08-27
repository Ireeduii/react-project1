import { Sandal } from "@/components";

const Home = () => {
  return (
    <div className="flex gap-10 mt-10 ml-15">
      <Sandal
        image="https://cdn03.plentymarkets.com/5cvotnt7n01y/item/images/301703/full/Mimas-blue-orange-238856-li1.jpg"
        title="Version1"
        price="$8"
      />
      <Sandal
        image="https://cdn03.plentymarkets.com/5cvotnt7n01y/item/images/301703/full/Mimas-blue-orange-238856-li1.jpg"
        title="Version2"
        price="$89"
      />
    </div>
  );
};

export default Home;
