export default function Categories(props):JSX.Element {
  return (
    <div style={{flexFlow:'column'}}>
      <h3>Categories:</h3>
      <ul>
        {(props.categories.length>0) && props.categories.map(cat=>{
          return <li key={cat}>{cat}</li>
        })}
      </ul>

      
      <h3>Category Details:</h3>
      <ul>
        {(props.category_details.length>0) && props.category_details.map(cat=>{
          return <li key={cat._id}>{cat.id} - {cat.name}</li>
        })}
      </ul>
    </div>
  );
}