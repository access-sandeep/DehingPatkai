import { DehingData } from "../../DehingData";
import { useContext } from "react";
import React from "react";

function BookCard() {
  const { products, setProduct } = useContext(DehingData);
  const maxAllowedDescriptionLength:number = 50;
  const linkToMore = React.createElement('a', {href:'#', onClick:(evt)=>{showMore(evt);}}, '[more]');
  function showMore(evt: any){
    console.log(evt);
  }

  return (
    <>
    {products.map(prod=>{
      return <div key={prod.name}>
          <h2>{prod.name}</h2>
          <p>Price: &#8377; {prod.price}</p>
          <p><h3>Description</h3></p>
          <p>{prod.description.substring(0,maxAllowedDescriptionLength)} {(prod.description.length>85?linkToMore:'')}</p>
      </div>
    })}
    </>
  );
}

export default BookCard;
