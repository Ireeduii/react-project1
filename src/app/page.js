// import { Box, Round, Text } from "@/components/";
import { Box, Round, Img } from "@/components";
const Home = () => {
  return (
    <div className=" flex flex-col gap-4">
      <Box></Box>
      <Box></Box>
      <Round></Round>
      <Box></Box>
      <Round></Round>
      <div className="flex flex-row gap-30" flex flex-row gap-6>
        <Img
          src={
            "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png"
          }
        ></Img>

        <Img
          src={
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
          }
        ></Img>

        <Img
          src={
            "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/NIKE+REVOLUTION+7.png"
          }
        ></Img>
      </div>
    </div>
  );
};

export default Home;
