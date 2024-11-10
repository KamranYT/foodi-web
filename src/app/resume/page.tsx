// "use client";

// import { Info } from "lucide-react";
// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaFigma,
//   FaNodeJs,
// } from "react-icons/fa";
// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// // About data
// const about = {
//   title: "About me",
//   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//   Info: [
//     {
//       fieldName: "Name",
//       fieldValue: "Muhammad Kamran",
//     },
//     {
//       fieldName: "Phone",
//       fieldValue: "(+92) 331 300 738 4",
//     },
//     {
//       fieldName: "Experience",
//       fieldValue: "1+ Year",
//     },
//     {
//       fieldName: "Nationality",
//       fieldValue: "Pakistani",
//     },
//     {
//       fieldName: "Email",
//       fieldValue: "mk7275374@gmail.com",
//     },
//     {
//       fieldName: "Freelance",
//       fieldValue: "Available",
//     },
//     {
//       fieldName: "Language",
//       fieldValue: "English, Urdu",
//     },
//   ],
// };

// // Skills data (technologies and tools)
// const skills = [
//   { icon: <FaHtml5 />, name: "HTML" },
//   { icon: <FaCss3 />, name: "CSS" },
//   { icon: <FaJs />, name: "JavaScript" },
//   { icon: <FaReact />, name: "React" },
//   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//   { icon: <SiNextdotjs />, name: "Next.js" },
//   { icon: <FaNodeJs />, name: "Node.js" },
//   { icon: <FaFigma />, name: "Figma" },
// ];

// const Resume = () => {
//   return (
//     <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto">
//         {/* About Section */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-white mb-4">{about.title}</h2>
//           <p className="text-white/60 mb-6">{about.description}</p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {about.Info.map((item, index) => (
//               <div key={index} className="text-white/80">
//                 <strong className="text-white">{item.fieldName}:</strong>{" "}
//                 <span>{item.fieldValue}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section>
//           <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
//           <div className="flex flex-wrap gap-6">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 text-white/80 hover:text-white transition-all"
//               >
//                 <span className="text-3xl">{skill.icon}</span>
//                 <span>{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Resume;

const Resume = () => {
  return (
    <div>
      <h1 className="flex justify-center text-accent font-extrabold text-4xl mt-36">Coming Soon</h1>
    </div>
    
  )
}
export default Resume