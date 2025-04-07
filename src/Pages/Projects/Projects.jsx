import { LinkIcon, Github } from "lucide-react"
import { Link } from "react-router-dom"
import { projects } from "../../DB/projects.js"
export const Projects = () => {

  return (
    <>
    <div className="p-4">
        <h1 className="font-cub text-white text-3xl md:text-5xl text-center my-4">Projects</h1>
        <div className="main grid grid-cols-2 md:grid-cols-3 max-w-4xl items-center  mx-auto gap-3">
          {projects.map((item,index) => (
            <>
            <div key={index} className={`h-48 md:h-56 w-full card   flex flex-col justify-center items-center md:w-full bg-black border-2 bg-cover bg-center rounded-xl hover:border-[#37ff8bff] bg-filter`}
           style={{ backgroundImage: `url(${item.img})` }}
            
            >
             <div className="flex flex-col z-50 justify-center  card2 items-center opacity-50 md:opacity-0 hover:opacity-100 transition">
            <Link to={`${item.id}`}> <h1 className="font-gil items-center text-xl md:text-4xl cursor-pointer text-white">{item.name}</h1></Link>
              <div className="links flex gap-x-3 mt-4">
                <a href="" className="text-black p-2 rounded-full bg-slate-50 hover:bg-[#37ff8bff]"> <LinkIcon/></a>
                <a href="" className="text-black p-2 rounded-full bg-slate-50 hover:bg-[#37ff8bff]"> <Github/></a>
              </div>
             </div>
             
            </div>
            </>
          ))}

        </div>
    </div>
    </>
  )
}
