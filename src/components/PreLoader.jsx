import loding from "../assets/bg.gif"

export default function PreLoader() {
  return (
    <>
    <div className="bg-black h-screen flex justify-center flex-col items-center  ">
        <img src={loding} className="h-80 w-80 rounded-full" alt="" />
        <h1 className='text-white font-gil text-[2rem] text-center hover:text-gray-300'>Loading... </h1>
    </div>
    
    </>
  )
}
