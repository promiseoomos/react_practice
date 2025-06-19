import { NavLink } from "react-router-dom"
// import classes from "../assets/css/test.module.css"
import "../assets/css/test.module.css"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    )
}

export default Navbar;