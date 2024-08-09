export default function SkillsBox() { 
    return (
      <>
        <div className="main flex justify-center items-center flex-col md:flex-row h-fit py-20 gap-2">
          <div className="h-60 w-80 bg-sky-100 rounded-xl text-[4rem] hover:bg-sky-600 transition cursor-pointer  font-gil text-black flex justify-center items-center">React</div>
          <div className="flex flex-row md:flex-col gap-2">
            <div   className="h-28 w-40   border-4  rounded-xl font-gil text-[1.5rem] hover:bg-yellow-400 hover:text-black transition text-yellow-400 flex justify-center items-center">Javascript</div>
            <div className="h-28 w-40 bg-red-600 rounded-xl font-gil text-[9rem] text-black  overflow-clip hover:text-[2rem] transition flex justify-center items-center ">C++</div>
          </div>
          <div className="flex flex-row md:flex-col gap-2">
            <div className="h-28 w-40 bg-green-400 rounded-xl font-gil transition hover:rotate-45 text-[1.5rem] text-black flex justify-center items-center "> Python</div>
            <div className="h-28 w-40 border-blue-400 border-4 rounded-xl font-gil text-[1.5rem] text-blue-400 flex justify-center items-center "> TailwindCSS</div>
          </div>
        </div>
      </>
    );
  }