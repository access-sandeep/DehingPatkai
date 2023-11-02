import cart from '../images/cart.png';

function CartPortion() {
    return <>
    <div>
        <span className="nav-line-2">
            <span className="icp-nav-flag icp-nav-flag-in icp-nav-flag-lop"></span>
            <div>EN</div>
            <span className="nav-icon nav-arrow"></span>
        </span>
    </div>
    <div className="felx-row">
      <div className='third-outer small-font'>Hello, Sandeep</div>
      <div className='third-outer small-font'><select name="localization" id="localization"><option value="">Account & List</option></select></div>
    </div>
    <div className="felx-row">
      <div className='third-outer small-font'>Returns</div>
      <div className='third-outer small-font'>& Orders</div>
    </div>
    <div className='felx-row'>
      <div className="cartnum">6</div>
    </div></>
}

export default CartPortion;
