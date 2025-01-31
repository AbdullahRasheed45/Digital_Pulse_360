import CaseStudy from "./Components/CaseStudy/CaseStudy";
import ExploreUs from "./Components/ExploreUs/ExploreUs";
import HowItWork from "./Components/HowItWork/HowItWork";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/OurServices/OurServices";
import { Projects } from "./Components/Projects/Projects";
import TrustSection from "./Components/TrustSection/TrustSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* <div className="h-[2000vh] w-full bg-[#1C1D21] relative"></div> */}
      {/* <TrustSection/> */}
      {/* <ExploreUs/> */}
      {/* <HowItWork/>
      <OurServices/> */}
      {/* <CaseStudy />
      <Projects/> */}
    </div>
  );
}
