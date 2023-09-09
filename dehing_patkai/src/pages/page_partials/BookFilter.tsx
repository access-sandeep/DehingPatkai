export default function BookFilter():JSX.Element {
  return (
    <div>
        <input type="text" name="productname" placeholder="Product name to be change to"/>
        <input type="number" name="productprice" placeholder="Product price to be change to" />
        <input type="text" name="productdescription" placeholder="Product decription be change to" />    
    </div>
  );
}