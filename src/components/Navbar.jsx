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
                <div onClick={handleClick} className=" cursor-pointer bg-white rounded-xl">
                  <h2 className="bg-white px-4 py-0.5 text-sm text-nowrap text-red-400  md:px-6 rounded-xl font-gil">{`${isdesign?"Coder🧑‍🦱":"Designer👨‍🎨"}`}</h2>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
