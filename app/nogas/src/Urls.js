import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/applications" element={<CaseStudies />} />
          <Route exact path="/design-engine" element={<DesignEngine />} />
          <Route exact path="/oasis" element={<OASIS />} />
          <Route exact path="/mirage" element={<MIRAGE />} />
          <Route exact path="/mirage" element={<MIRAGE />} />
          <Route exact path='/download' element={<EmailContactForm />}></Route>

          <Route
            exact
            path="/applications/improving-equitable-access"
            element={<ImprovingEquitableAccess />}
          />
          <Route
            exact
            path="/applications/improving-equitable-access-background"
            element={<ImprovingEquitableAccessBackground />}
          />
          <Route
            exact
            path="/applications/preparing-future-growth"
            element={<PrepareFutureGrowth />}
          />
          <Route
            exact
            path="/applications/preparing-future-growth-background"
            element={<PrepareFutureGrowthBackground />}
          />
          <Route
            exact
            path="/applications/layering-sustainability"
            element={<LayeringSustability />}
          />
          <Route
            exact
            path="/applications/layering-sustainability-background"
            element={<LayeringSustainabilityBackground />}
          />
          <Route
            exact
            path="/applications/maximize-micromobility"
            element={<MaximizingMicromobility />}
          />
          <Route
            exact
            path="/applications/maximize-micromobility-background"
            element={<MaximizeMicromobilityBackground />}
          />
          <Route
            exact
            path="/applications/future-of-work"
            element={<FutureOfWork />}
          />
          <Route
            exact
            path="/applications/future-of-work-background"
            element={<FutureOfWorkBackground />}
          />
          <Route
            exact
            path="/applications/curb-to-kitchen"
            element={<CurbToKitchen />}
          />
          <Route
            exact
            path="/applications/curb-to-kitchen-background"
            element={<CurbToKitchen />}
          />
          <Route
            exact
            path="/applications/autonomous-universal-access"
            element={<AutonomousUniversalAccess />}
          />
          <Route
            exact
            path="/applications/autonomous-universal-access-background"
            element={<AutonomousUniversalAccessBackground />}
          />
        </Routes>
      </BrowserRouter>
    );
}