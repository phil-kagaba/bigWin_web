import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav className="Navbar">
        <h1 className="logo">Big<b>Win</b></h1>
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/signin" className="link">Login</Link>
          <Link to="/signup" className="link-join">Join Now</Link> 
        </div>
      </nav>
     );
}
 
export default Navbar;