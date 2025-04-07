import {
  BsGithub,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import bg from "../../assets/bg.gif"
import gif from "./OG.gif";
import SocialLink from "../../components/SocialLink";


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
      <div style={{ backgroundImage: `url(${gif})`, backgroundSize: 250, backgroundBlendMode: "hue" }} className="flex justify-center   bg-no-repeat bg-left bg-blend-hue bg-cover items-center mt-20 flex-col h-fit pb-5 b">
        <h1 className="text-white font-gil text-3xl md:text-5xl    text-start  ">
          Hello, I'm Narendra!
        </h1>
        <h1 className="text-white font-gil text-4xl md:text-7xl   text-start  ">
          Full <span className="text-[#37ff8b]">Stack</span> Develpoer
        </h1>
        <div>

          {/* <button
            onClick={handleDownload}
            className="overflow-hidden border my-4 font-gil border-white w-32 p-2 h-12 bg-black text-white  rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          >
            Resume!
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
            ></span>
            <span
              className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
            >Explore!</span
            >
          </button> */}

     

        </div>
        <div className="flex gap-x-3 mt-4 justify-center flex-wrap">
        <SocialLink />
        </div>
        <p className="py-4 text-gray-300 text-center font-gil">
          Coding dreams, designing visions – where pixels speak volumes.
        </p>
      </div>
    </div>
  );
}
