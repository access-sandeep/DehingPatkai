import pin from '../images/pin.jpg';

function LogoPortion() {
    return <div id="glow-ingress-block">
    <div className='second-outer'>
    <img src={pin} className="App-logo small-decorative-image" alt="" />
    </div>
    <div className='second-outer deliver'>
      <div className='third-outer small-font'>Deliver to Sandeep</div>
      <div className='third-outer larger-font'>Chennai 600130</div>
    </div>
  </div>
}

export default LogoPortion;
