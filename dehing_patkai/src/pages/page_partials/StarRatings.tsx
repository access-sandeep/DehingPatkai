export default function StarRatings(props):JSX.Element {
  function showStars(stars) {
    let starsArray = [];
    for(let i=0; i<stars; i++) {
      starsArray.push(`@`);
    }
    return starsArray;
  }

  return (
    <ul>
      <li><span><strong>Star 1:</strong></span> <span style={{alignItems: 'center'}}>{props.star_ratings && showStars(props.star_ratings.star_1).map((s, i)=>{
        return <span key={i}>{s}</span>
      })}</span> </li>
      <li><span><strong>Star 2:</strong></span> <span style={{alignItems: 'center'}}>{props.star_ratings && showStars(props.star_ratings.star_2).map((s, i)=>{
        return <span key={i}>{s}</span>
      })}</span> </li>
      <li><span><strong>Star 3:</strong></span> <span style={{alignItems: 'center'}}>{props.star_ratings && showStars(props.star_ratings.star_3).map((s, i)=>{
        return <span key={i}>{s}</span>
      })}</span> </li>
      <li><span><strong>Star 4:</strong></span> <span style={{alignItems: 'center'}}>{props.star_ratings && showStars(props.star_ratings.star_4).map((s, i)=>{
        return <span key={i}>{s}</span>
      })}</span> </li>
      <li><span><strong>Star 5:</strong></span> <span style={{alignItems: 'center'}}>{props.star_ratings && showStars(props.star_ratings.star_5).map((s, i)=>{
        return <span key={i}>{s}</span>
      })}</span> </li>
    </ul>
  );
}