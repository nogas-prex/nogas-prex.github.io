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

import headerImage from "../../img/4_Case Study 02_ Preparing for Future Growth/0_Cover/1.png";
import backgroundImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/0_Cover/1.jpg";
import beforeImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Slider_Before.png'
import afterImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Slider_After.png";
import densityImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Smart Density.png'
import vehUsageImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Vehicle Usage.png";
import envPerfImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Better Envir-performance.png";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
import carImage from '../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Vehicle Trips.png'
import pedImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Pedestrian Accessibility.png";
import permImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Permeable.png";
import canopyImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Canopy.png";


export default function LayeringSustability() {
    return ( <
        div >
        <
        ResponsiveAppBar / >
        <
        CaseStudyLanding image = { '' }
        title = "LAYERING SUSTAINABILITY"
        subtitle = "Landscape Optimization"
        body = {
            [
                `Today, metropolitan areas are increasingly experiencing the effects of climate change, including extreme heat, 
                drought, flooding, and wildfire. Meanwhile, the intensification of rural land use and the addition of impervious 
                surfaces – both intrinsic to the process of urbanization itself – are further exacerbating these environmental risks.`,
                `The widespread adoption of autonomous mobility services may be an opportunity to break this disastrous cycle by reducing 
                the size of vehicle fleets and transforming massive networks of roadways and other impervious surfaces into multi-functional 
                green infrastructure.`,
            ]
        }
        />

        <
        CaseStudyBackground title = "BACKGROUND"
        subtitle = "Suburban Climate Effects"
        image = { '' }
        body = {
            [
                `Today, communities around the world are facing the dramatic effects of climate change. In 2021, 
                more than 80 percent of Americans experienced at least one heat wave, which were the primary cause 
                of more than 1,300 deaths that year in the U.S. Along with these extreme heat events, drought and 
                wildfire are threatening millions of lives and properties. Meanwhile, increased precipitation intensity, 
                along with sea-level rise, is causing a sustained increase in billion-dollar flood events each decade.`,
            ]
        }
        stats = {
            [
                { pct: "1876", text: "Anual Household Vehicle Trips" },
                {
                    pct: "25%+",
                    text: "Residential Land Devoted to Vehicular Surfaces",
                },
                { pct: "35%+", text: "GHG Emissions Reduction Potential" },
            ]
        }
        />

        <
        Grid container sx = {
            { width: "100vw", height: "70vh", overflowY: "hidden" }
        } >
        <
        ImageSlider leftImage = { '' }
        rightImage = { '' }
        /> < /
        Grid > <
        CaseStudyVision title = "VISION"
        subtitle = "The Future of Sustainable Suburbs"
        body = {
            [
                `In the near term, optimized street design, along with retrofitted parking areas, can reduce excessive pavement 
                and offer space for expanding the urban canopy. This can simultaneously help sequester atmospheric carbon, while 
                helping to alleviate pressures related to stormwater management and extreme heat exposure. Alternatively, this 
                could provide new real estate for housing in order to facilitate more resilient and affordable communities.  `,
                `In the fully autonomous future, a dramatic reduction of pavement and other vehicular surfaces can allow for a 
                more flexible and compact block configuration that prioritizes green infrastructure and improved access to 
                environmental system services. `,
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

        <
        div > custom stuff < /div>

        <
        CaseStudySummary text = { `` }
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
        /> < /
        div >
    );
}