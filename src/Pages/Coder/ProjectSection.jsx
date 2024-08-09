import { Link } from "react-router-dom";

export default function ProjectSection() {
  return (
    <>
      <div className="flex py-4 justify-center items-center px-5 gap-3">
        <h1 className="font-gil text-2xl text-nowrap text-white">
          Amazing Project
        </h1>
        <span className="border-b-2 border-white w-full border-dashed"></span>
      </div>

        <div>
        <div className="bg-black py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div className="flex items-center gap-12">
        <h2 className="text-2xl font-bold text-white lg:text-3xl">Gallery</h2>

        <p className="hidden max-w-screen-sm text-gray-400  md:block">This section highlights a featured project, demonstrating real-world applications and showcasing my expertise in creating impactful, user-friendly solutions.</p>
      </div>

      <Link to={'/projects'} className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-900 font-gil outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</Link>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
  
      <a href="https://digitalkosh.netlify.app/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src="https://images.pexels.com/photos/25922242/pexels-photo-25922242.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Crypto</span>
      </a>
    
      <a href="https://pals-petopia.netlify.app/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-[#FFFFFF] shadow-lg md:col-span-2 md:h-80">
        <img src="https://res.cloudinary.com/dzxynskmo/image/upload/v1723183762/Petopia/qpfmlyrowdosw2h4pqfr.gif" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-center object-scale-down transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ecommerce</span>
      </a>
      
      <a href="https://cybergenerator.netlify.app/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src="https://images.pexels.com/photos/25109872/pexels-photo-25109872/free-photo-of-cybergen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tools</span>
      </a>
      
      <a href="https://www.npmjs.com/package/backend-wala" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src="https://res.cloudinary.com/dzxynskmo/image/upload/v1723184772/cjlmuafudsmele9dzr3c.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">NPM library</span>
      </a>
      
    </div>
  </div>
</div>
        </div>
    </>
  );
}
