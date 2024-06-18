import { useParams } from "react-router-dom"
import { Github, Link  } from "lucide-react";
import { projects } from "../../DB/projects.js"


export const ProjectView = () => {
    const { id } = useParams();

    const data = projects.filter((item) =>(item.id == id))
    console.log(data)

  return (
    <div className=" max-w-4xl mx-auto pt-4 p-2">
        <div className="bgimage h-60  md:h-80 border-4    object-center object-cover  bg-center rounded-2xl border-white">
            <img src={data[0].coverImg} className="h-full w-full object-cover object-center rounded-2xl" alt="" />
        </div>
        <div className="links my-2 flex gap-x-2">
            <a href="" className="text-black rounded-full bg-white p-2 hover:bg-[#37ff8bff]"> <Link /> </a>
            <a href="" className="text-black rounded-full bg-white p-2 hover:bg-[#37ff8bff]"> <Github /> </a>
        </div>
        <div className="my-2">
            <h1 className="font-gil text-2xl text-white">{data[0].name}</h1>
        </div>
        <div className="description">
            <p className="font-gil text-gray-200 ">{data[0].description}</p>
        </div>
    </div>
  )
}
