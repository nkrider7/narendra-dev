import React from "react";


export default function Box() {
  return (
    <>
      <div className=" relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 450"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="40"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="79.5"
              ry="62"
              cx="330.36043035059646"
              cy="295.9929664754002"
              fill="#37ff8b"
              className="animate-pulse"
            ></ellipse>
            <ellipse
              rx="79.5"
              ry="62"
              cx="437.3031643022609"
              cy="217.43326256166705"
              fill="#0082ffff"
              className="animate-pulse"
            ></ellipse>
            <ellipse
              rx="79.5"
              ry="62"
              cx="312.6204814677119"
              cy="179.4932263580901"
              fill="#eab308ff"
              className="animate-pulse"
            ></ellipse>
            <ellipse
              rx="79.5"
              ry="62"
              cx="312.6204814677119"
              cy="179.4932263580901"
              fill="#a500bd"
              className="animate-pulse"
            ></ellipse>
          </g>
        </svg>
        <h1 className="child absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-transparent font-gil text-[1rem] text-center   md:text-[4rem]">
          {" "}
          Amazing Website Experience{" "}
        </h1>
        <button className="child absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white font-bold  text-black  w-fit px-4 py-2 text-center scale-75 md:scale-100 rounded-md hover:bg-black hover:text-white transition border-white border">
          Hire me
        </button>
      </div>
    </>
  );
}
