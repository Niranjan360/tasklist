import { Link } from "react-router-dom";

const Navbar = () => {

    return (<nav>
                <div className="d1">
                    <Link to="/">Home</Link>
                </div>
                <div className="d2">
                    <Link to="/add">Add Task</Link>
                    <Link to="/search">Search</Link>
                </div>
            </nav>);
}
 
export default Navbar;