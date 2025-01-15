import LeftSide from "../components/HomeComponent/LeftSide";
import RightSide from "../components/HomeComponent/RightSide";
import NavBar from "../components/Navbar/NavBar";

export default function Home() {

    return (<>
        <NavBar />
        <div id="color-mode" className="flex flex-row justify-between gap-4 background-color mx-[2rem] mb-[1rem]">
           <LeftSide />
            <RightSide />
        </div>
    </>
    )
}
