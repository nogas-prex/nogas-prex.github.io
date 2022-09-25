import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home'
import CaseStudies from "./views/CaseStudies";
import ImprovingEquitableAccess from './views/case-studies/ImprovingEquitableAccess'
export default function Urls() { 
    
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/case-studies" element={<CaseStudies />} />
          <Route exact path="/case-studies/improving-equitable-access" element={<ImprovingEquitableAccess />} />
        </Routes>
      </BrowserRouter>
    );
}