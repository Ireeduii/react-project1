// // import { Box, Round, Text } from "@/components/";
// import { Box, Round, Img } from "@/components";
// const Home = () => {
//   return (
//     <div className=" flex flex-col gap-4">
//       <Box></Box>
//       <Box></Box>
//       <Round></Round>
//       <Box></Box>
//       <Round></Round>
//       <div className="flex flex-row gap-30" flex flex-row gap-6>
//         <Img
//           src={
//             "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png"
//           }
//         ></Img>

//         <Img
//           src={
//             "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
//           }
//         ></Img>

//         <Img
//           src={
//             "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/NIKE+REVOLUTION+7.png"
//           }
//         ></Img>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "@/components";

// function Card({ date, title, excerpt }) {
//   return (
//     <div
//       style={{
//         border: "1px solid white",
//         borderRadius: "8px",
//         width: "300px",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ height: "150px", background: "#eee" }}></div>
//       <div style={{ padding: "15px" }}>
//         <p style={{ fontSize: "12px", color: "gray" }}>{date}</p>
//         <h3>{title}</h3>
//         <p style={{ fontSize: "14px", color: "gray" }}>{excerpt}</p>
//         <button
//           style={{
//             marginTop: "10px",
//             padding: "10px",
//             width: "100%",
//             background: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//           }}
//         >
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div style={{ fontFamily: "sans-serif" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "10px 20px",
//           borderBottom: "1px solid #ddd",
//         }}
//       >
//         <div>Simple Blog</div>
//         <div style={{ display: "flex", gap: "15px" }}>
//           <a href="#">Home</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//         </div>
//       </div>

//       <div
//         style={{
//           textAlign: "center",
//           padding: "50px 20px",
//           background: "#000000",
//         }}
//       >
//         <h1>Welcome to Simple Blog</h1>
//         <p>
//           Discover insightful articles about web development, programming, and
//           technology. Clean design meets quality content.
//         </p>
//       </div>

//       <div style={{ padding: "40px 20px" }}>
//         <h2 style={{ textAlign: "center" }}>Latest Posts</h2>
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             justifyContent: "center",
//             marginTop: "20px",
//           }}
//         >
//           <Card
//             date="January 15, 2025"
//             title="Getting Started with Modern Web Development"
//             excerpt="Learn the fundamentals of modern web development including React, Next.js, and TypeScript."
//           />
//           <Card
//             date="January 12, 2025"
//             title="The Art of Clean Code"
//             excerpt="Best practices for writing maintainable, readable code that your future self will thank you for."
//           />
//           <Card
//             date="January 10, 2025"
//             title="Building Responsive Designs"
//             excerpt="Techniques to create sites that look great on all devices — from mobile-first to CSS Grid layouts."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
