import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import ImageSlider from "../../components/ImageSlider";

import headerImage from "../../img/7_Case Study 05_ Designing the Future of Work/0_Cover/1.png";
import backgroundImage from "../../img/7_Case Study 05_ Designing the Future of Work/2_Background/0_Cover/1.jpg";
import beforeImage from '../../img/7_Case Study 05_ Designing the Future of Work/3_Vision/Slider_Before.png'
import afterImage from "../../img/7_Case Study 05_ Designing the Future of Work/3_Vision/Slider_After.png";
import densityImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Smart Density.png'
import vehUsageImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Vehicle Usage.png";
import envPerfImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Better Envir-performance.png";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
import carImage from '../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Vehicle Trips.png'
import pedImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Pedestrian Accessibility.png";
import permImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Permeable.png";
import canopyImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Canopy.png";


export default function FutureOfWork() {
    return ( <div>
        <ResponsiveAppBar / >
        <CaseStudyLanding image = { headerImage }
        title = "DESIGNING THE FUTURE OF WORK"
        subtitle = "Employment Campus Evolution"
        body = {
            [
                `Since the birth of the suburban employment campus in the 1940s, these developments have provided large, 
                high-quality, efficient workspaces for big corporations. Today, according to the U.S. Bureau of Labor Statistics, 
                32 percent of U.S. employment is in the suburbs of large metropolitan areas. However, as people and jobs continue 
                to suburbanize, the distance between people and jobs is growing, and the geography between people and jobs is changing. `,
                `The future of work is less certain than ever since the COVID-19 pandemic disrupted conventional working modes. Remote 
                working or working from home is becoming more popular and necessary than ever. The suburb-to-suburb commuting challenge, 
                the evolving remote work options, and proliferation of autonomous mobility and micromobility provide a key opportunity to 
                reimagine the typical suburban employment campus.  `,
            ]
        }
        />

        <CaseStudyBackground title = "BACKGROUND"
        subtitle = "Outdated Employment Campus Design"
        image = { backgroundImage }
        body = {
            [
                `The design of suburban campuses themselves hasn’t evolved much over the past several decades. The 
                footprint of parking lots designed to support these campuses is often several times larger than the 
                office buildings, which not only wastes valuable land, but also causes larger-scale environmental degradation.`,
            ]
        }
        stats = {
            [
                { pct: "30%+", text: "U.S. Employments is in Suburbs" },
                {
                    pct: "50%+",
                    text: "Campus Land Devoted to Vehicular Surfaces",
                },
                { pct: "0", text: "Walkable Access to Public Transit" },
            ]
        }
        />

        <Grid container sx = {
            { width: "100vw", height: "70vh", overflowY: "hidden" }
        } >
        <ImageSlider leftImage = { beforeImage }
        rightImage = { afterImage }
        /> </Grid> <CaseStudyVision title = "VISION"
        subtitle = "The Future of Autonomous Suburbs"
        body = {
            [
                `In the near term, evolving remote work options, especially hybrid working modes, will contribute to increased demands for smaller, 
                more flexible workspaces. Meanwhile, fewer workers on-site at the same time will need fewer parking spaces than before, creating 
                opportunities to convert large parking areas to housing or to enhance a site’s environmental performance. `,
                `In the autonomous future, with complete adoption of autonomous mobility services, on-site parking can be further reduced or even eliminated. `,
            ]
        }
        icons = {
            [
                { img: "", alt: "", label: "Smart Density" },
                { img: "", alt: "", label: "Reduced Vehicle Usage" },
                {
                    img: "",
                    alt: "",
                    label: "Better Environmental Performance",
                },
            ]
        }
        />

        <div> custom stuff </div>

        <CaseStudySummary text = { `` }
        icons = {
            [
                { img: "", pct: "50%", text: "Reduction of vehicle tripps" },
                {
                    img: "",
                    pct: "60%",
                    text: "Increase in pedestrian accessibility",
                },
                {
                    img: "",
                    pct: "80%",
                    text: "Reduction of impervious surface cover",
                },
                { img: "", pct: "60%", text: "Increase in tree canopy" },
            ]
        }
        /> </div >
    );
}