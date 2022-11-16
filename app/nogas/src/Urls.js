import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home'
import CaseStudies from "./views/CaseStudies";
import ImprovingEquitableAccess from './views/case-studies/ImprovingEquitableAccess'
import PrepareFutureGrowth from "./views/case-studies/PrepareFutureGrowth";
import LayeringSustability from "./views/case-studies/LayeringSustainability";
import MaximizingMicromobility from "./views/case-studies/MaximizeMicromobility";
import FutureOfWork from "./views/case-studies/FutureOfWork";

import ImprovingEquitableAccessBackground from "./views/case-studies/ImprovingEquitableAccessBackground";
import PrepareFutureGrowthBackground from "./views/case-studies/PrepareFutureGrowthBackground";
import LayeringSustainabilityBackground from "./views/case-studies/LayeringSustainabilityBackground";
import MaximizeMicromobilityBackground from "./views/case-studies/MaximizeMicromobilityBackground";
import FutureOfWorkBackground from "./views/case-studies/FutureOfWorkBackground";
import OASIS from "./views/OASIS";
import MIRAGE from "./views/MIRAGE";
import DesignEngine from "./views/DesignEngine";

export default function Urls() { 
    
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/case-studies" element={<CaseStudies />} />
          <Route exact path="/design-engine" element={<DesignEngine />} />
          <Route exact path="/oasis" element={<OASIS />} />
          <Route exact path="/mirage" element={<MIRAGE />} />

          <Route
            exact
            path="/case-studies/improving-equitable-access"
            element={<ImprovingEquitableAccess />}
          />
          <Route
            exact
            path="/case-studies/improving-equitable-access-background"
            element={<ImprovingEquitableAccessBackground />}
          />
          <Route
            exact
            path="/case-studies/preparing-future-growth"
            element={<PrepareFutureGrowth />}
          />
          <Route
            exact
            path="/case-studies/preparing-future-growth-background"
            element={<PrepareFutureGrowthBackground />}
          />
          <Route
            exact
            path="/case-studies/layering-sustainability"
            element={<LayeringSustability />}
          />
          <Route
            exact
            path="/case-studies/layering-sustainability-background"
            element={<LayeringSustainabilityBackground />}
          />
          <Route
            exact
            path="/case-studies/maximize-micromobility"
            element={<MaximizingMicromobility />}
          />
          <Route
            exact
            path="/case-studies/maximize-micromobility-background"
            element={<MaximizeMicromobilityBackground />}
          />
          <Route
            exact
            path="/case-studies/future-of-work"
            element={<FutureOfWork />}
          />
          <Route
            exact
            path="/case-studies/future-of-work-background"
            element={<FutureOfWorkBackground />}
          />
        </Routes>
      </BrowserRouter>
    );
}