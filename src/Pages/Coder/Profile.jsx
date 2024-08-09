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
      link: "https://www.linkedin.com/in/narendra-a90182223/",
      logo: <BsLinkedin size={40} />,
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://x.com/narendbugfixer",
      logo: <BsTwitter size={40} />,
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/nkriderking/",
      logo: <BsInstagram size={40} />,
    },
    {
      id: 5,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100010603034354",
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
          Full <span className="text-[#37ff8b]">Stack</span> Develpoer
        </h1>
        <div className="flex gap-x-3 mt-4 justify-center flex-wrap">
          {links.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className={`h-24 w-24 rounded-full tooltip tooltip-success bg-green-600/20  hover:bg-green-500/10 border transition  border-emerald-300 flex items-center justify-center }`} data-tip={item.name}
            >
              <span className="text-white"> {item.logo}</span>
            </a>
          ))}
        </div>
        <p className="py-4 text-gray-300 text-center font-gil">
        Transforming designs into responsive, user-centric interfaces. Passionate about crafting seamless experiences with clean code and modern front-end technologies.
        </p>
      </div>
    </div>
  );
}
