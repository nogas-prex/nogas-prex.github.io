import ReactCompareImage from "react-compare-image";

export default function ImageSlider(props) {
  const leftImage = props.leftImage;
  const rightImage = props.rightImage;
  if (leftImage === undefined || rightImage === undefined) {
    return (
      <ReactCompareImage
        style={{ height: "50vh", width: "50vw" }}
        leftImage={leftImage}
        rightImage={rightImage}
      />
    );
  } 
  return <div></div>
}
