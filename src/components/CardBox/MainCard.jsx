import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { cards } from "./CartData"

const Example = () => {
  return (
    <div className="bg-black">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase flex flex-col justify-center gap-3  items-center text-neutral-500">
          Scroll down
        <a className=" text-center m-0 animate-bounce "><FaAngleDoubleDown /></a>
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
      <span className="font-semibold uppercase flex flex-col justify-center gap-3  items-center text-neutral-500">
          Scroll Up 
        <a className=" text-center m-0 animate-bounce "><FaAngleDoubleUp /></a>
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
    
      key={card.id}
      className="group relative h-[450px] w-[450px] scale-75  md:scale-100 overflow-hidden bg-neutral-800"
    >
      <div
        style={{
         backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div 
      
      className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-6xl font-black font-gil uppercase text-white ">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;
