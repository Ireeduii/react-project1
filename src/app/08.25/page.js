import { Counter } from "@/components/08.25/easy_counter";
import { EasyField } from "@/components/08.25/easy_field";
import { ToggleMe } from "@/components/08.25/easy_toggle";
import { EasyInputField } from "@/components/08.25/easy_input_field";
import { MediumToDoList } from "@/components/08.25/medium_todo";

const Home = () => {
  return (
    <div className="bg-white w-full h-screen text-black flex flex-col gap-10">
      <Counter></Counter>
      <EasyField></EasyField>
      <ToggleMe></ToggleMe>
      <EasyInputField></EasyInputField>
      <MediumToDoList></MediumToDoList>
    </div>
  );
};
export default Home;
