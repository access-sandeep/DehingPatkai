export default function AdditionalImages(props):JSX.Element {
  return (
    <div>{
      (props.images.length  > 0) && props.images.map((im, index)=>{
        return <ul key={index}>
          <li kay="1">Thumb => {im.thumb}</li>
          <li kay="2">Mid => {im.mid}</li>
          <li kay="3">Large => {im.large}</li>
        </ul>
      })
      }</div>
  );
}