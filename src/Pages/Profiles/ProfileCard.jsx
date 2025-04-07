import img from "../../assets/ironman.png"
import ring from "../../assets/ring2.png"

export default function ProfileCard() {
  return (
    <>
    <div className="w-full   h-fit block relative">
        <div className="w-full h-fit flex justify-center border-b-2 relative">
          <div className="flex justify-center">
            <img
              src={img}
              alt="profile"
              className="max-h-[650px] z-20 filter grayscale"
            />
          </div>
          <h1 className="font-gil text-white top-16 text-[4rem] md:text-[14rem] z-10 absolute">
            Developer
          </h1>
          <img
            src={ring}
            className="absolute md:h-[650px] bottom-16 rounded-full   md:bottom-16  z-0"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
