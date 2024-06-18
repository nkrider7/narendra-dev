import logo from "./../assets/dev-folio.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header className="bg-black  ">
        <div className="mx-auto flex h-16  w-full items-center  gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center md:justify-center ">
            <nav aria-label="Global" className=" md:block">
              <ul className="flex items-center gap-4 text-sm">
                <li>
                  <Link
                    className="text-gray-500 font-gil cursor-pointer  font-bold text-md md:text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-[#37ff8bff]"
                    to={"/profile"}
                  >
                    My Profile
                  </Link>
                </li>
                <Link
                  to={"/"}
                  className="block  cursor-pointer md:ml-80 md:mr-80 text-teal-600 dark:text-teal-300"
               
                >
                  <img src={logo} className="md:w-40 w-36 hover:scale-110" alt="" />
                </Link>
                <li>
                  <Link
                    className="text-gray-500 font-gil  cursor-pointer text-md md:text-lg transition hover:text-gray-500/75 dark:text-white dark:hover:text-[#37ff8bff]"
                    to={"/projects"}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
