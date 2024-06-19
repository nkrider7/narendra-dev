import "./HeroButton.css";
import SocialLink from "./SocialLink";
import Typingword from "./Typingword";
import gif from "../assets/bg.gif";


export default function Hero() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.5"
      className="dark:bg-black  h-fit w-full"
    >
      <div 
      style={{backgroundImage: `url(${gif})`}}
       className=" bg-no-repeat  bg-center md:bg-right blur-sm h-[500px] bg-black "></div>
      <div>
        <h1 className="font-cub md:flex gap-1 text-[50px] leading-none md:text-[90px] absolute top-[4rem] md:top-28 pl-10  text-white ">
          <h1 className="text-[#37ff8b]"> I&apos;m </h1>Narendra
        </h1>
        <h1 className="text-[40px] md:flex  gap-2 font-cub md:text-[70px] leading-none absolute top-40 md:top-48 pl-10  text-white ">
          <h1 className="text-[#37ff8b]"> Work as </h1> <Typingword />
        </h1>
        <h1 className="hidden md:block  text-[20px] absolute top-[17rem] pl-10  font-gil  text-white text-center">
          Coding dreams, designing visions – where pixels speak volumes.
        </h1>
        <button
        onClick={() => 
          window.location.href = "https://www.linkedin.com/in/narendra-a90182223/"
        }
          type="button"
          className="rounded-md absolute button font-gil  top-[20rem] ml-10   "
          data-text="Awesome"
        >
          <span className="actual-text">&nbsp;Hire&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;Hire&nbsp;
          </span>
        </button>
        <div className="absolute  pb-4 top-[25rem] ml-10 font-gil ">
          <SocialLink />
        </div>

        <button className="button font-cub" data-text="Awesome"></button>
      </div>
      <div className="w-full h-[1px] mt-3 bg-slate-500"></div>
    </div>
  );
}
