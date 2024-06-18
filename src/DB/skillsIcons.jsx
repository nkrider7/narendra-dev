import { FaGithub, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill , RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiShadcnui } from "react-icons/si";
import { DiMongodb, DiPython } from "react-icons/di";

export const skills = [
  {
    id: 1,
    icon: <FaGithub color="gray" size={50} />,
    name: "GitHub",
    link: "https://github.com",
  },
  {
    id: 2,
    icon: <RiTailwindCssFill  color="#06B6D4" size={50} />,
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/docs",
  },
  {
    id: 3,
    icon: <IoLogoJavascript color="#F7DF1E" size={50} />,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 4,
    icon:<RiReactjsFill color="#61DAFB" size={50} />,
    name:"React",
    link:"https://reactjs.org/"
  },
  {
    id: 5,
    icon:<RiNextjsFill color="white" size={50} />,
    name:"Next.js",
    link:"https://nextjs.org/"
  },
  {
    id: 6,
    icon:<FaNodeJs color="#3C873A" size={50} />,
    name:"Node.js",
    link:"https://nodejs.org/en/"
  },
  {
    id: 7,
    icon:<SiExpress color="#3C873A" size={50} />,
    name:"Express.js",
    link:"https://expressjs.com/"
  },
  {
    id: 8,
    icon:<DiMongodb color="#47A248" size={50} />,
    name:"MongoDB",
    link:"https://www.mongodb.com/"
  },
  {
    id: 9,
    icon:<IoLogoFirebase color="#FFCA28" size={50} />,
    name:"Firebase",
    link:"https://firebase.google.com/"
  },
  {
    id: 10,
    icon:<DiPython color="#3776AB" size={50} />,
    name:"Python",
    link:"https://www.python.org/"
  },
  {
    id: 11,
    icon:<SiShadcnui color="gray" size={50} />,
    name:"shadcn",
    link:"https://shadcn.com/"
  },
  
  
  
  // Add more skills here as needed
];
