import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import CaseStudies from "./views/CaseStudies";
import ImprovingEquitableAccess from './views/applications/ImprovingEquitableAccess'
import PrepareFutureGrowth from "./views/applications/PrepareFutureGrowth";
import LayeringSustability from "./views/applications/LayeringSustainability";
import MaximizingMicromobility from "./views/applications/MaximizeMicromobility";
import FutureOfWork from "./views/applications/FutureOfWork";
import ImprovingEquitableAccessBackground from "./views/applications/ImprovingEquitableAccessBackground";
import PrepareFutureGrowthBackground from "./views/applications/PrepareFutureGrowthBackground";
import LayeringSustainabilityBackground from "./views/applications/LayeringSustainabilityBackground";
import MaximizeMicromobilityBackground from "./views/applications/MaximizeMicromobilityBackground";
import FutureOfWorkBackground from "./views/applications/FutureOfWorkBackground";
import OASIS from "./views/OASIS";
import MIRAGE from "./views/MIRAGE";
import DesignEngine from "./views/DesignEngine";
import EmailContactForm from "./views/Contact";
import AutonomousUniversalAccess from "./views/applications/AutonomousUniversalAccess";
import AutonomousUniversalAccessBackground from "./views/applications/AutonomousUniversalAccessBackground";
import CurbToKitchen from "./views/applications/CurbtoKitchen";

export default function Urls() { 
    
    return (
      <HashRouter basename="/applications">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/home" element={<Home />} />
          <Route  path="/applications" element={<CaseStudies />} />
          <Route  path="/design-engine" element={<DesignEngine />} />
          <Route  path="/oasis" element={<OASIS />} />
          <Route  path="/mirage" element={<MIRAGE />} />
          <Route  path="/mirage" element={<MIRAGE />} />
          <Route  path='/download' element={<EmailContactForm />}></Route>

          <Route
            path="/applications/improving-equitable-access"
            element={<ImprovingEquitableAccess />}
          />
          <Route
            path="/applications/improving-equitable-access-background"
            element={<ImprovingEquitableAccessBackground />}
          />
          <Route
            path="/applications/preparing-future-growth"
            element={<PrepareFutureGrowth />}
          />
          <Route
            path="/applications/preparing-future-growth-background"
            element={<PrepareFutureGrowthBackground />}
          />
          <Route
            path="/applications/layering-sustainability"
            element={<LayeringSustability />}
          />
          <Route
            path="/applications/layering-sustainability-background"
            element={<LayeringSustainabilityBackground />}
          />
          <Route
            path="/applications/maximize-micromobility"
            element={<MaximizingMicromobility />}
          />
          <Route
            path="/applications/maximize-micromobility-background"
            element={<MaximizeMicromobilityBackground />}
          />
          <Route
            path="/applications/future-of-work"
            element={<FutureOfWork />}
          />
          <Route
            path="/applications/future-of-work-background"
            element={<FutureOfWorkBackground />}
          />
          <Route
            path="/applications/curb-to-kitchen"
            element={<CurbToKitchen />}
          />
          <Route
            path="/applications/curb-to-kitchen-background"
            element={<CurbToKitchen />}
          />
          <Route
            path="/autonomous-universal-access"
            element={<AutonomousUniversalAccess />}
          />
          <Route
            path="/autonomous-universal-access-background"
            element={<AutonomousUniversalAccessBackground />}
          />
        </Routes>
      </HashRouter>
    );
}