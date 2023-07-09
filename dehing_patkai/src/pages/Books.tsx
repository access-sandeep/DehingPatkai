import { DehingData } from "../DehingData";
import { useContext, useState } from "react";
import BookCard from "./page_partials/BookCard";

function Books() {
  const { products, setProduct } = useContext(DehingData);
  const [ name, setName ] = useState("Mukherji, Sandeep")
  return (
    <><h1>Books</h1>
    <input type="text" name="productname" placeholder="Product name to be change to" value={name} onChange={(evt)=>{
      setName(evt.target.value)
    }} />
    <button onClick={()=>{
      let name = document.querySelector('[name="productname"]') as HTMLInputElement
      setProduct(name.value)
    }}>Change name</button>

    <BookCard />
    </>
  );
}

export default Books;
