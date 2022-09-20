
import ResponsiveAppBar from "../components/AppBar";
import PageTitle from "../components/PageTitle";
import Mission from "../components/Mission";
import Targets from "../components/Targets";
export default function Home() { 
    return (
        <div>
            <ResponsiveAppBar />
            <PageTitle />
            <Mission />
            <Targets />
        </div>
    )
}