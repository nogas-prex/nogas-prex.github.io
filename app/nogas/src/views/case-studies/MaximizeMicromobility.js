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

import headerImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/0_Cover/1.png";
import backgroundImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/2_Background/0_Cover/1.png";
import beforeImage from '../../img/6_Case Study 04_ Maximizing Micro-mobility/3_Vision/Section_Existing.png'
import afterImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/3_Vision/Section_Long Term.png";
import densityImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Smart Density.png'
import vehUsageImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Vehicle Usage.png";
import envPerfImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Better Envir-performance.png";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
import carImage from '../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Vehicle Trips.png'
import pedImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Pedestrian Accessibility.png";
import permImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Permeable.png";
import canopyImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Canopy.png";

export default function MaximizingMicromobility() {
    return (
        <div>
        <ResponsiveAppBar / >
        <CaseStudyLanding image = { headerImage }
        title = "MAXIMIZING MICRO-MOBILITY"
        subtitle = "Streetscape Adaption"
        body = {
            [
                `In the U.S., only about 5 percent of the working population uses public transit to get to work, and 
                this percentage has changed little since 1995. In many regions, where suburb-to-suburb commute patterns 
                are steadily replacing their suburb-to-urban core precursors, public transit has become increasingly outmoded.  `,
                `According to the latest National Household Travel Survey (2017), around 60 percent of domestic light-duty vehicle 
                trips are shorter than 6 miles. These short trips represent a huge potential for reducing vehicular dependence in 
                suburban areas, if more micromobility options are implemented. However, current standards and design guidelines for 
                suburban streets typically lack the essential infrastructure to accommodate large-scale micromobility development. `,
            ]
        }
        />

        <CaseStudyBackground title = "BACKGROUND"
        subtitle = "Car-dominated Travel Mode"
        image = { backgroundImage }
        body = {
            [
                `The average width of an American residential street is 55 feet, which is three times the average street 
                width in many other countries. This car-based street design not only leads to more car accidents (because 
                there are more cars on the road), its also wastes valuable land resources.`,
            ]
        }
        stats = {
            [
                { pct: "55ft", text: "Average Width of Residential Street" },
                {
                    pct: "19642",
                    text: "miles Annual VMT per Household",
                },
                { pct: "85%+", text: "Workers Drive to Work" },
            ]
        }
        />

        <Grid container sx = {
            { width: "100vw", height: "70vh", overflowY: "hidden" }
        } >
        <ImageSlider leftImage = { beforeImage }
        rightImage = { afterImage }
        /> </Grid > <CaseStudyVision title = "VISION"
        subtitle = "A Multi-modal Mobility Adapted Street"
        body = {
            [
                `In the near term, the excessive widths of many suburban right of ways can be narrowed and improved by 
                incorporating protected micromobility lanes and hubs. Micromobility corridors can then be implemented to 
                further improve connectivity and pedestrian safety from block to block. `,
                `In the autonomous future, with the compact design and precise control system of autonomous mobility systems, 
                the width of a vehicular lane can be reduced dramatically, so that a large number of paved surfaces can be 
                converted into greenspace or commercial frontages. Meanwhile, an autonomous-delivery infrastructure network 
                can be built out and connected to the existing micromobility corridors, further reducing the number of daily 
                household vehicle trips. `,
            ]
        }
        icons = {
            [
                { img: '', alt: "", label: "Smart Density" },
                { img: '', alt: "", label: "Reduced Vehicle Usage" },
                {
                    img: 'envPerfImage',
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
                { img: '', pct: "50%", text: "Reduction of vehicle tripps" },
                {
                    img: '',
                    pct: "60%",
                    text: "Increase in pedestrian accessibility",
                },
                {
                    img: '',
                    pct: "80%",
                    text: "Reduction of impervious surface cover",
                },
                { img: '', pct: "60%", text: "Increase in tree canopy" },
            ]
        }
        /> </div >
    );
}