import pin from '../images/pin.jpg';
import cart from '../images/cart.png';

function Top() {
  return (
      <>
      <div>
        <div id="glow-ingress-block">
          <div className='second-outer'>
          <img src={pin} className="App-logo small-decorative-image" alt="" />
          </div>
          <div className='second-outer'>
            <div className='third-outer small-font'>Deliver to Sandeep</div>
            <div className='third-outer small-font'>Chennai 600130</div>
          </div>
        </div>
      </div>
      <div><input type="text" /><button>search</button></div>
      <div><select name="localization" id="localization"><option value="">EN India</option></select></div>
      <div>
        <div className='third-outer small-font'>Hello, Sandeep</div>
        <div className='third-outer small-font'><select name="localization" id="localization"><option value="">Account & List</option></select></div>
      </div>
      <div>
        <div className='third-outer small-font'>Returns</div>
        <div className='third-outer small-font'>& Orders</div>
      </div>
      <div className='felx-row'>
        <div>6</div>
        <img src={cart} className="App-logo cart-decorative-image" alt="" />
      </div>
      </>
  );
}

export default Top;
