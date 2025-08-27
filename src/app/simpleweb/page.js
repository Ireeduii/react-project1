import { Navbar, Blog } from "@/components";

export default function Home() {
  const datas = [
    { title: "first", name: "Home" },
    { title: "second", name: "About" },
    { title: "third", name: "Contact" },
  ];

  return (
    <div>
      <div className="p-8">
        <h2>Sample Blog</h2>
        {datas.map((element) => {
          return <Navbar datas={element}></Navbar>;
        })}
      </div>
      <div>
        <h3>Welcome to Simple Blog</h3>
        <p>
          At the beginning of the 17th century, social manners, the cultivation
          of politeness, and the training of an accomplished gentleman became
          the theme of many essayists.
        </p>
      </div>
      <section>
        <h1>Latest Posts</h1>
        <div>
          {datas.map((el) => {
            return <Blog data={el}></Blog>;
          })}
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
        </div>
      </section>
    </div>
  );
}
