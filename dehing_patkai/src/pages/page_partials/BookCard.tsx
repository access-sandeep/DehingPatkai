import { DehingData } from "../../DehingData";
import { useContext } from "react";

function BookCard() {
  const { products, setProduct } = useContext(DehingData);
  return (
    <>
    <div>
      <h2>{products.name}</h2>
      <p>{products.price}</p>
      <p>{products.description}</p>
    </div>
    </>
  );
}

export default BookCard;
