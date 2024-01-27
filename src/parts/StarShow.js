import { IoIosStar, IoIosStarHalf } from "react-icons/io";
const renderStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoIosStar key={i} className=" size-6 text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(
      <IoIosStarHalf key="half" className=" size-6 text-yellow-400" />
    );
  }
  return stars;
};
export default renderStarRating;
