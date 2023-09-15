import {FaRegStarHalfStroke, FaStar, FaRegStar} from "react-icons/fa6";

const Rating = (
  {
    value = 0,
    ...props
  }) => {

  const getStars = () => {
    const limit = 5;
    let stars = [];
    let starValue = value / 2;
    let emptyStars = limit - starValue;
    for (let i = 1; i <= starValue; i++) {
      stars.push(<FaStar/>)
    }
    if (value % 2 !== 0) stars.push(<FaRegStarHalfStroke/>);
    for (let j = 1; j <= emptyStars; j++) {
      stars.push(<FaRegStar/>)
    }
    return stars
  }

  return (
    <div style={{display: "flex", flexFlow: "row nowrap", alignItems: "center"}}>
      {getStars()}
    </div>
  )
}

export default Rating;
