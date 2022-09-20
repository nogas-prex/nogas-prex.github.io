import ReactCompareImage from "react-compare-image";



export default function ImageSlider(props) { 
    const leftImage = props.leftImage
    const rightImage = props.rightImage

    return (
        <ReactCompareImage leftImage={leftImage} rightImage={rightImage} />    )
}