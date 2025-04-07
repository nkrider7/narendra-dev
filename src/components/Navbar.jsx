import logo from "./../assets/dev-folio.png";
import { Link, NavLink } from "react-router-dom";
import { UseSwitch } from "../context/switch";
export default function Navbar() {
  const { setIsDesign, isdesign } = UseSwitch();
  function handleClick() {
    if (isdesign) {
      setIsDesign(false);
    } else {
      setIsDesign(true);
    }
  }
 const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Directly reference the file path
    link.download = "NarendraFullStackResume.pdf"; // Set the file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <header className="bg-black  ">
        <div className="mx-auto flex h-16  w-full items-center  gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center md:justify-center ">
            <nav aria-label="Global" className=" md:block">
              <ul className="flex items-center justify-between gap-4 text-sm">
                <li>
                  <NavLink
                    to={"/"}
                    className={({isActive}) => ` hover:text-[#37ff8bff] ${isActive ? "text-[#37ff8bff]":"text-white"}  text-md md:text-lg cursor-pointer font-gil`}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                   className={({isActive}) => ` hover:text-[#37ff8bff] ${isActive ? "text-[#37ff8bff]":"text-white"}  text-md md:text-lg cursor-pointer font-gil`}
                    to={"/profile"}
                  >
                    My Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                   className={({isActive}) => ` hover:text-[#37ff8bff] ${isActive ? "text-[#37ff8bff]":"text-white"}  text-md md:text-lg cursor-pointer font-gil`}
                    to={"/projects"}
                  >
                    Projects
                  </NavLink>
                </li>
                <div >
                  <button
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
          </button> </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
