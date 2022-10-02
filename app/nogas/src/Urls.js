import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home'
import CaseStudies from "./views/CaseStudies";
import ImprovingEquitableAccess from './views/case-studies/ImprovingEquitableAccess'
import PrepareFutureGrowth from "./views/case-studies/PrepareFutureGrowth";
import LayeringSustability from "./views/case-studies/LayeringSustainability";
import MaximizingMicromobility from "./views/case-studies/MaximizeMicromobility";
import FutureOfWork from "./views/case-studies/FutureOfWork";
export default function Urls() { 
    
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/case-studies" element={<CaseStudies />} />
          <Route
            exact
            path="/case-studies/improving-equitable-access"
            element={<ImprovingEquitableAccess />}
          />
          <Route
            exact
            path="/case-studies/preparing-future-growth"
            element={<PrepareFutureGrowth />}
          />
          <Route
            exact
            path="/case-studies/layering-sustainability"
            element={<LayeringSustability />}
          />
          <Route
            exact
            path="/case-studies/maximize-micromobility"
            element={<MaximizingMicromobility />}
          />
          <Route
            exact
            path="/case-studies/future-of-work"
            element={<FutureOfWork />}
          />
        </Routes>
      </BrowserRouter>
    );
}