import { CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";
import { Card } from "@mui/material";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from '../../components/ImageCarousel'
import { CardActionArea } from "@mui/material";

import headerImage from '../../img/3_Case Study 01_ Improving Equitable Access/0_Cover/1.png';
import canopyImage from '../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/Canopy.png'
import densityImage from "../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/Density.png";
import MODImage from "../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/MOD.png";
import permeableImage from "../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/Permeable.png";
import metricAgingImage from '../../img/3_Case Study 01_ Improving Equitable Access/2_Background/0_Cover/1.png';
import beforeImage from '../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Slider_Before.png'
import afterImage from "../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Slider_After.png";

import smartDensityImg from '../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Smart Density.png'
import equityAccessImg from "../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Equitable Mobility Access.png";
import envPerfImage from "../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Better Environmental Performance.png";

import existingImage from '../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Existing Scenario.png'
import optimizedImage from "../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Proposed Scenario.png";
import proximityImage from "../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Proximity Analysis.png";
import mobilityImage from "../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Autonomous Ready.png";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
// import ImageCarousel from "../../components/ImageCarousel";

const metricStyle = {
    backgroundColor: "#00A360",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignLast: "center",
};
export default function ImprovingEquitableAccess() {

    const carouselItems = [
        { name: "Existing", img: existingImage },
        { name: "Optimized Scenario", img: optimizedImage },
        { name: "Proximity Analysis", img: proximityImage },
        { name: "Mobility Image", img: mobilityImage },
    ];

    return ( <
        div >
        <
        ResponsiveAppBar / >
        <
        CaseStudyLanding image = { headerImage }
        title = "IMPROVING EQUITABLE ACCESS"
        subtitle = "Neighborhood Retrofit"
        body = {
            [
                `Since 1925, the number of car-owning households in the United 
                States has skyrocketed from 17 percent to more than 93 percent. 
                In the suburbs, where less than five percent of the U.S. workforce 
                uses public transit to get to work, the configuration of the built 
                environment is designed to prioritize cars. These car-centric communities 
                create distinct burdens for an increasing percentage of the suburban 
                population who are elderly, disabled, or otherwise unable to drive. 
                And the emphasis on monofunctional vehicular infrastructure often 
                makes it difficult for pedestrians and those using existing micromobililty 
                offerings, such as bicycles and scooters.`,
                `In the near-term, the proliferation of autonomous vehicles (AVs) may offer 
                a path forward for mobility-challenged people, enabling them to use vehicular
                infrastructure without driving a car. Eventually, widespread adoption of 
                autonomous transportation systems and new land use patterns that include 
                expanded micromobility options could pave the way for radically new suburban 
                configurations that prioritize equitable mobility for all. `,
            ]
        }
        />

        <
        CaseStudyBackground title = "BACKGROUND"
        subtitle = "Mobility Access Challenge in Suburbs"
        image = { metricAgingImage }
        body = {
            [
                `Today, nearly 55 million Americans are over age 65. 
                By 2060, this number is expected to increase to 95 million, 
                jumping from 16 percent to 23 percent of the total U.S. population. 
                This aging of the population will create major challenges for 
                ensuring equitable access to mobility, especially since older 
                individuals are more likely to have physical difficulty driving 
                because of changes in hearing, eyesight, and other physical factors. 
                In the suburbs, where car travel is often the only reliable daily 
                transportation option, this presents major obstacles for transportation planners.`,
            ]
        }
        stats = {
            [
                { pct: "25%", text: "Adults have at least one disability" },
                {
                    pct: "25%+ ",
                    text: "Fewer daily trips made by people with disabilities",
                },
                { pct: "14%", text: "Disabled adults with mobility limitations" },
            ]
        }
        />

        <Grid container sx = {
            { width: "100vw", height: "70vh", overflowY: "hidden" }
        } >
        <
        ImageSlider leftImage = { beforeImage }
        rightImage = { afterImage }
        /> 
        </Grid>



        <
        CaseStudyVision title = { "VISION" }
        subtitle = "Autonomous Suburbs for Equitable Access"
        body = {
            [
                `The codes, policies, and guidelines used to control suburban form can be expanded to account for 
                the potential effects of AVs, and to better accommodate increased micromobility and pedestrian modes. 
                New neighborhood land use patterns can ensure equitable access to local amenities within a five-minute 
                walkshed of all residents, including those with mobility challenges. `,
                `Additionally, suburban block configurations can be optimized to further improve mobility access for the 
                elderly and people with disabilities who can’t drive.`,
            ]
        }
        icons = {
            [
                { img: smartDensityImg, alt: "bae", label: "Smart Density" },
                {
                    img: equityAccessImg,
                    alt: "bar",
                    label: "Equitable Mobility Access",
                },
                {
                    img: envPerfImage,
                    alt: "foo",
                    label: "Better Environmental Performance",
                },
            ]
        }
        />

        { /* custom stuff */ } <
        Grid container direction = "column"
        sx = {
            { marginTop: "7vh" }
        } >
        <
        Grid item >
        <
        Grid container direction = "row" >
        <
        Grid item xs = { 0 }
        md = { 6 } > </Grid> 
        <Grid item xs = { 12 }
        md = { 6 }
        sx = {
            { padding: "7em", textAlign: "left" }
        } >
        <
        Typography variant = "sectionTitle" > Equitable Access </Typography> 
        <br> </br> 
        <Typography variant = "sectionSubtitle" >
        Neighborhood Optimization with OASIS 
        </Typography>  
        <hr color = "EC008C" > </hr> 
        <Typography variant = "bodyBlack">
        OASIS is a parametric toolbox that can help planners and developers optimize neighborhood - scale land use and mobility frameworks.The access optimization tool of OASIS toolbox can analyze and optimize accessbility index of given neighrohood masterplan to generate the optimal scenario with more equitable access. 
        </Typography> 
        <br > </br> 
        <Button variant = "outlined"
        style = {
            {
                color: "#EC008C",
                borderColor: "#EC008C",
                marginTop: "3em",
            }
        }
        endIcon = { < ArrowForwardIcon / > } >
        Learn more about OASIS 
        </Button> 
        </Grid> 
        </Grid> 
        </Grid> 
        <Grid container justifyContent = "center"
        alignContent = "center"
        direction = "column"
        sx = {
            { marginLeft: "25%", marginRight: "25%", width: "50%" }
        } >
        <
        Grid item xs = { 12 }
        md = { 6 }
        elevation = { 5 } >
        <
        Carousel navButtonsAlwaysVisible = { true }
        sx = {
            { maxWidth: "750px" }
        } > {
            carouselItems.map((img, i) => ( <
                ImageItem key = { i }
                image = { img.img }
                name = { img.name }
                />
            ))
        } 
        </Carousel>   
        </
        Grid > <
        Grid item xs = { 0 }
        sm = { 3 } > </Grid> <
        Grid item xs = { 12 }
        sm = { 6 } >
        <
        Typography variant = "body2" >
        Click through the various scenarios above to see how access optimization tool of OASIS can generate different masterplan scenarios with optimized accessibility performance
        for all population groups. 
        </Typography>  
        </
        Grid > <
        Grid item xs = { 0 }
        sm = { 3 } > </Grid> 
        </
        Grid > 
        </Grid>

        { /* end custom stuff */ }

        { /* stats / summary */ } <
        CaseStudySummary text = { `Compared with today's average suruban form, long-term optimization
          scenarios demonstrate valuable performance benefits including:` }
        icons = {
            [
                { img: densityImage, pct: "40%", text: "Increase in density" },
                {
                    img: MODImage,
                    pct: "80%",
                    text: "Increase in mobility on-demand access",
                },
                {
                    img: permeableImage,
                    pct: "15%",
                    text: "Reduction of impervious surface cover",
                },
                { img: canopyImage, pct: "10%", text: "Increase in tree canopy" },
            ]
        }
        /> 
        </div>
    );
}