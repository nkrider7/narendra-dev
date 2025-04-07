import Marquee from "../../components/Marquee";
import Eduction from "../Profiles/Eduction";
import ProfileCard from "../Profiles/ProfileCard";
import Profile from "./Profile";
import ProjectSection from "./ProjectSection";
import SkillsBox from "./SkillsBox";
import MainCard from "../../components/CardBox/MainCard"
export default function CoderHome() {
  return (
    <>
      <Profile />
      <ProjectSection/>
      <SkillsBox />
      <Eduction />
      {/* <MainCard /> */}
      <ProfileCard />
      <Marquee />
    </>
  );
}
