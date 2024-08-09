import Hero from "../../components/Hero"
import MainCard from "../../components/CardBox/MainCard"
import Marquee from "../../components/Marquee"
import Box from "../../components/Box"
import MainGrid from "../../components/MasonryGrid/MainGrid"
export const DesignHome = () => {
  return (
    <div className=" max-w-7xl mx-auto">
        <Hero></Hero>
        <MainCard />
        <Marquee />
        <Box />
        <MainGrid />
    
    </div>
  )
}
