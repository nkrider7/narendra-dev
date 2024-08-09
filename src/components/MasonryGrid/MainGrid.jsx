import { motion, useScroll } from "framer-motion"
import { useRef } from "react";

export default function MainGrid() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  return (
    <>
      <motion.div ref={targetRef} className="my-2">
        <h1   className="text-white font-bold text-[2rem] text-center hover:text-gray-300">
          😓
        </h1>
        <div  className="p-5 md:p-10">
          <div className="columns-2 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            {images.map((image) => (
             <motion.div style={{y:scrollYProgress}} key={image.id}>
                 <img
               src={image.url}
               alt={image.alt}
               key={image.id}
               className="rounded-lg hover:scale-95 h-80 bg-blue-600 transition"
           />
             </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

const images = [
    {
        url: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image1",
        id: 1,
    },
    {
        url: "https://images.pexels.com/photos/1719233/pexels-photo-1719233.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image2",
        id: 2,
    },
    {
        url: "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image3",
        id: 3,
    },
    {
        url: "https://images.pexels.com/photos/3052727/pexels-photo-3052727.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image4",
        id: 4,
    },
    {
        url: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image5",
        id: 5,
    },
    {
        url: "https://images.pexels.com/photos/2274729/pexels-photo-2274729.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image6",
        id: 6,
    },
    {
        url: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image7",
        id: 7,
    },
    {
        url: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image8",
        id: 8,
    },
    {
        url: "https://images.pexels.com/photos/3374938/pexels-photo-3374938.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image9",
        id: 9,
    },
    {
        url: "https://images.pexels.com/photos/955798/pexels-photo-955798.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image10",
        id: 10,
    },
    {
        url: "https://images.pexels.com/photos/2863546/pexels-photo-2863546.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image11",
        id: 11,
    },
    {
        url: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image12",
        id: 12,
    },
    {
        url: "https://images.pexels.com/photos/2438212/pexels-photo-2438212.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image13",
        id: 13,
    },
    {
        url: "https://images.pexels.com/photos/3747282/pexels-photo-3747282.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "image14",
        id: 14,
    }
];
