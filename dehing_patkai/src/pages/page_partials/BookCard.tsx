import { DehingData } from "../../DehingData";
import { useContext } from "react";

function BookCard() {
  const { products, setProduct } = useContext(DehingData);
  return (
    <>
    <div>
      <h2>{products}</h2>
    </div>
    </>
  );
}

export default BookCard;
