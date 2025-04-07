import ProfileCard from "./ProfileCard";
import Details from "./Details.jsx";


export default function Profile() {
  return (
    <>
      <div className="mt-4">
        <div>
          <Details />
        </div>
        <div className=""><ProfileCard /></div>
        
      </div>
    </>
  )
}
