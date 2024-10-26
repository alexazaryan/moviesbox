import "./StarRating.css";

function StarRating({ rating }) {
  // Переводим рейтинг в 10-балльной шкале в 5-балльную (5 звёзд)
  const starCount = 5;
  const filledStars = Math.floor((rating / 10) * starCount);
  const halfStar = rating % 2 >= 1; // Половина звезды, если оценка с дробью

  return (
    <span className="star-rating">
      {[...Array(starCount)].map((_, index) => (
        <span
          key={index}
          className={`star ${
            index < filledStars
              ? "filled"
              : halfStar && index === filledStars
              ? "half"
              : ""
          }`}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default StarRating;
