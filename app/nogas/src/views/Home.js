
import ResponsiveAppBar from "../components/AppBar";
import PageTitle from "../components/PageTitle";
import Mission from "../components/Mission";
import Targets from "../components/Targets";
import CardNavigation from "../components/BottomNavigation";
import IncrementalProgres from "../components/IncrementalProgress";

export default function Home() { 
    return (
      <div style={{ width: "100vw", xOverflow:'hidden'}}>
        <ResponsiveAppBar />
        <PageTitle />
        <Mission />

        <Targets />
        <IncrementalProgres />
        <CardNavigation
          imgs={[
            "https://nogas-swar.s3.amazonaws.com/img/01_Landing/Case+Study.png",
            "https://nogas-swar.s3.amazonaws.com/img/01_Landing/Design+Engine.png",
          ]}
        />
      </div>
    );
}