import { Outlet, Link } from "react-router-dom";
import "../App.css"
const Layout = () => {
  return (
    <>
      <nav className="navbar">

          
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/info">Info</Link>
          
            <Link className="link" to="/contact">Contact</Link>
       
   
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;