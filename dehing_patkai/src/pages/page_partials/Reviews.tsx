export default function Reviews(props):JSX.Element {
  function showStars(stars) {
    let starsArray = [];
    for(let i=0; i<stars; i++) {
      starsArray.push(`@`);
    }
    return starsArray;
  }
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
      {props.reviews.map(review=>{
        return <li key={review._id}>
          <p>Stars: {showStars(review.stars).map((s, i)=>{
            return <span key={i}>{s}</span>
          })}</p>
          <p>Comment: <textarea cols="50" defaultValue={review.comment} /></p>
        </li>
      })}
      </ul>
    </div>
  );
}