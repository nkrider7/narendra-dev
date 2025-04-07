import { skills } from "../../DB/skillsIcons";
export default function SkillsBox() {
  return (
    <>
     <div className="flex  justify-center pt-5 flex-wrap gap-x-2">
        {skills.map((item, index) =>(
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
      <div className="main scale-105 md:scale-125  mt-4 flex justify-center items-center flex-col md:flex-row h-fit pt-5 pb-8 gap-2">
        <div 
        style={{ backgroundImage: `url(https://i.pinimg.com/originals/ee/c5/5f/eec55f9c4824e8fa8128e06c7b302309.gif)` }}
        
        className="h-60 w-80 bg-sky-100 rounded-xl text-[4rem] hover:bg-sky-600 transition cursor-pointer  font-gil text-black flex justify-center items-center">
          React
        </div>
        <div className="flex flex-row md:flex-col gap-2">
          <div  
           style={{ backgroundImage: `url(https://i.pinimg.com/originals/e8/46/55/e84655c30b18e167bf08bfd489a1d468.gif)` }}
        
          className="h-28 w-40   rounded-xl font-gil text-[1.5rem] hover:bg-yellow-400  transition text-yellow-400 flex justify-center items-center">
            Javascript
          </div>
          <div 
            style={{ backgroundImage: `url(https://i.makeagif.com/media/1-14-2018/lxOHwP.gif)`}}
          className="h-28 w-40 bg-red-600 rounded-xl font-gil text-[2rem] text-red-500 overflow-clip  transition flex justify-center items-center ">
            C++
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-2">
          <div 
            style={{ backgroundImage: `url(https://i.pinimg.com/originals/eb/e3/98/ebe39867c26391122f0c852521316dc0.gif)` }}
          className="h-28 w-40 bg-[#37ff8b] rounded-xl font-gil transition  text-[1.5rem] text-green-500 flex justify-center items-center ">
            {" "}
            Python
          </div>
          <div 

          style={{ backgroundImage: `url(https://www.icegif.com/wp-content/uploads/2022/01/icegif-999.gif` }}
          className="h-28 w-40  rounded-xl font-gil text-[1.5rem] hover:bg-slate-50 text-blue-100 flex justify-center items-center ">
            {" "}
            TailwindCSS
          </div>
        </div>
      </div>
     
    </>
  );
}
