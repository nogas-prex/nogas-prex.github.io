import ReactCompareImage from "react-compare-image";



export default function ImageSlider(props) { 
    const leftImage = props.leftImage
    const rightImage = props.rightImage

    return (
        <ReactCompareImage
            style={{height:'50vh', width:'50vw'}}
            leftImage={leftImage} rightImage={rightImage} />)
}