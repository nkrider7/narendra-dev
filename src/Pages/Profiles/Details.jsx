import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Eduction from "./Eduction";
import Skills from "./Skills"

export default function Details() {
  return (
    <>
      <div className="flex justify-center h-fit">
        <div className="pt-10">
          <div className="profileavtar flex items-end gap-x-9 h-90">
            <div>
              <motion.div
                drag
                dragConstraints={{
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                }}
                className="my-4 border-2 w-fit hover:border-[#37ff8b] border-white rounded-full"
              >
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQGDEyMc7DFvWQ/profile-displayphoto-shrink_200_200/0/1681552557632?e=1723680000&v=beta&t=I7GL7908Z2BJ0HB3VmNAAtWAe1i2llIrYc0BHLuJdow"
                  className="h-40 rounded-full "
                  draggable="false"
                  alt="profile"
                  onDoubleClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/narendra-kumar-1b6b1b1b3/"
                    );
                  }}
                />
              </motion.div>
              <h1 className="text-white font-gil text-5xl   hover:text-gray-300 text-start  ">
               
                Hello, I'm Narendra!{" "}
              </h1>
              <h1 className="text-white font-gil text-4xl text-start  hover:text-gray-300  ">
                I bring visions to life by turning stunning designs{" "}
              </h1>
              <h1 className="text-white font-gil text-5xl text-start  hover:text-gray-300 ">
                into{" "}
                <span className="text-[#37ff8b]">
                  <Typingword />
                </span>
                , code.
              </h1>
            </div>
          </div>
           {/* <Skills /> */}
          <div>
              <Eduction />
            </div>
        </div>
      </div>
    </>
  );
}

function Typingword() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Seamless,",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Clean",
        1000,
        "Efficient",
        1000,
        "Robust",
        1000,
        "Responsive",
        1000,
        "Dynamic",
        1000,
        "Interactive",
        1000,
        "User-friendly",
        1000,
        "Intuitive",
        1000,
        "Optimized",
        1000,
        "Scalable",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
