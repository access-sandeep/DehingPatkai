import { NavLink } from "react-router-dom";

function Navigation():any {
    const navList = [
        {
            id:1,
            name:"Home",
            link:"/"
        },
        {
            id:2,
            name:"All",
            link:"/all"
        },
        {
            id:3,
            name:"Fresh",
            link:"/fresh"
        },
        {
            id:4,
            name:"Books",
            link:"/books"
        },
        {
            id:5,
            name:"Electronics",
            link:"/electronics"
        },
        {
            id:6,
            name:"Gift Ideas",
            link:"/gift_ideas"
        },
        {
            id:7,
            name:"Baby",
            link:"/baby"
        },
        {
            id:8,
            name:"Buy Again",
            link:"/buy_again"
        }
    ];
  return (
    <nav className="navigation">
        <ul>
            {navList.map(nav=>{
                return <li key={nav.id}>
                            <NavLink to={nav.link}>{nav.name}</NavLink>
                        </li>
            })}
        </ul>
    </nav>
  );
}

export default Navigation;
