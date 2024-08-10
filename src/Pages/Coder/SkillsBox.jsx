import { skills } from "../../DB/skillsIcons";
export default function SkillsBox() {
  return (
    <>
     <div className="flex justify-center pt-5 flex-wrap gap-x-2">
        { skills.map((item, index) =>(
          <div key={index} className="group relative">
          <button>
            {item.icon}
          </button>
          <span
            className="absolute text-black -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out  group-hover:scale-100">
            {item.name}<span></span>
          </span>
        </div>
        ))}
      </div>
      <div className="main flex justify-center items-center flex-col md:flex-row h-fit pt-5 pb-8 gap-2">
        <div className="h-60 w-80 bg-sky-100 rounded-xl text-[4rem] hover:bg-sky-600 transition cursor-pointer  font-gil text-black flex justify-center items-center">
          React
        </div>
        <div className="flex flex-row md:flex-col gap-2">
          <div className="h-28 w-40   border-4  rounded-xl font-gil text-[1.5rem] hover:bg-yellow-400 hover:text-black transition text-yellow-400 flex justify-center items-center">
            Javascript
          </div>
          <div className="h-28 w-40 bg-red-600 rounded-xl font-gil text-[9rem] text-black  overflow-clip hover:text-[2rem] transition flex justify-center items-center ">
            C++
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-2">
          <div className="h-28 w-40 bg-[#37ff8b] rounded-xl font-gil transition  text-[1.5rem] text-black flex justify-center items-center ">
            {" "}
            Python
          </div>
          <div className="h-28 w-40 border-blue-400 border-4 rounded-xl font-gil text-[1.5rem] hover:bg-slate-50 text-blue-400 flex justify-center items-center ">
            {" "}
            TailwindCSS
          </div>
        </div>
      </div>
     
    </>
  );
}
