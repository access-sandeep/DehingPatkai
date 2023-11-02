import LogoPortion from './LogoPortion';
import SearchPortion from './SearchPortion'
import CartPortion from './CartPortion';

function Top() {
  return (
      <div>
        <div className="col-2">
          <LogoPortion />
        </div>
        <div className="col-4">
          <SearchPortion />
        </div>
        <div className="col-3">
          <CartPortion />
        </div>
      </div>
  );
}

export default Top;
