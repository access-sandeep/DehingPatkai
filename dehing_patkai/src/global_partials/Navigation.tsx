import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
        <ul>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/all" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>All</NavLink>
            </li>
            <li>
                <NavLink to="/fresh" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Fresh</NavLink>
            </li>
            <li>
                <NavLink to='/books' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Books</NavLink>
            </li>
            <li>
                <NavLink to='/electronics' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Electronics</NavLink>
            </li>
            <li>
                <NavLink to='/gift_ideas' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Gift Ideas</NavLink>
            </li>
            <li>
                <NavLink to='/baby' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Baby</NavLink>
            </li>
            <li>
                <NavLink to='/buy_again' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""}>Buy again</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;
