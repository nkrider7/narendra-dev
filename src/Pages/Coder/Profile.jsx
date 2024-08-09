import {
  BsGithub,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import bg from "../../assets/bg.gif"


export default function Profile() {

  

  const links = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/nkrider7",
      logo: <BsGithub size={40} />,
    },
    {
      id: 2,
      name: "Linkdin",
      link: "https://github.com/nkrider7",
      logo: <BsLinkedin size={40} />,
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://github.com/nkrider7",
      logo: <BsTwitter size={40} />,
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://github.com/nkrider7",
      logo: <BsInstagram size={40} />,
    },
    {
      id: 5,
      name: "Facebook",
      link: "https://github.com/nkrider7",
      logo: <BsFacebook size={40} />,
    },
  ];
  return (
    <div>
      <div style={{backgroundImage: `url(${bg})`, backgroundSize:250,backgroundBlendMode:"hue"}} className="flex justify-center   bg-no-repeat bg-center bg-blend-hue bg-contain items-center mt-20 flex-col h-fit border-b-2 pb-5 border-dashed">
        <h1 className="text-white font-gil text-3xl md:text-5xl    text-start  ">
          Hello, I'm Narendra!
        </h1>
        <h1 className="text-white font-gil text-4xl md:text-7xl   text-start  ">
          Full <span className="text-green-400">Stack</span> Develpoer
        </h1>
        <div className="flex gap-x-3 mt-4 justify-center flex-wrap">
          {links.map((item, index) => (
            <div
              key={index}
              className={`h-24 w-24 rounded-full tooltip tooltip-success bg-green-600/20  hover:bg-green-500/10 border transition  border-emerald-300 flex items-center justify-center }`} data-tip={item.name}
            >
              <span className="text-white"> {item.logo}</span>
            </div>
          ))}
        </div>
        <p className="py-4 text-gray-300 text-center font-gil">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut error ex
          consectetur eius! Expedita est a alias dicta error praesentium hic
          esse! Incidunt?
        </p>
      </div>
    </div>
  );
}
