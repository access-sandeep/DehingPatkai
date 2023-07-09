import { Outlet} from "react-router";
import Logo from "./Logo";
import Top from './Top';
import Navigation from './Navigation';
import Footer from "./Footer";

function Layout() {
  return (
    <>
    <header>
      <div className='App-header'>
        <Logo />
        <Top />
      </div>
      <div className="navigation_holder">
        <Navigation />
      </div>      
    </header>
    <main>
      <Outlet />  
    </main>
    <Footer />
    </>
  );
}

export default Layout;
