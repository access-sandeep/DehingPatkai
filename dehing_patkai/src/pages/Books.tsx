import { DehingData } from "../DehingData";
import { useContext, useState } from "react";
import BookCard from "./page_partials/BookCard";

function Books() {
  const { products, setProduct } = useContext(DehingData);
  const [ prod, setProd ] = useState({name:'', price: 200000, description:'A long descrition'})
  return (
    <><h1>Books</h1>
    <input type="text" name="productname" placeholder="Product name to be change to" value={prod.name} onChange={(evt)=>{
      setProd({name:evt.target.value, price: prod.price, description:prod.description})
    }} />
    <input type="number" name="productprice" placeholder="Product price to be change to" value={prod.price} onChange={(evt)=>{
      setProd({name:prod.name, price: Number(evt.target.value), description:prod.description})
    }} />
    <input type="text" name="productdescription" placeholder="Product decription be change to" value={prod.description} onChange={(evt)=>{
      setProd({name:prod.name, price: prod.price, description:evt.target.value})
    }} />
    <button onClick={()=>{
      let name = document.querySelector('[name="productname"]') as HTMLInputElement;
      let price = document.querySelector('[name="productprice"]') as HTMLInputElement;
      let description = document.querySelector('[name="productdescription"]') as HTMLInputElement;
      setProduct({name:name.value, price: Number(price.value), description:description.value})
    }}>Change name</button>

    <BookCard />
    </>
  );
}

export default Books;
