
import ResponsiveAppBar from "../components/AppBar";
import PageTitle from "../components/PageTitle";
import Mission from "../components/Mission";
import Targets from "../components/Targets";
import CardNavigation from "../components/BottomNavigation";
import caseStudyImg from "../img/01_Landing/Case Study.png"
import designEngingImg from "../img/01_Landing/Design Engine.png";
export default function Home() { 
    return (
      <div>
        <ResponsiveAppBar />
        <PageTitle />
        <Mission />
        <Targets />
        <CardNavigation imgs={[caseStudyImg, designEngingImg]} />
      </div>
    );
}