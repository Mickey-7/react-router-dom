// created for Links

import { Link, NavLink } from "react-router-dom"
import { useAuth } from "./auth"

export const Navbar = () => {
    // added for authentication and protected routes
    const auth = useAuth()

    // added for Active Links
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }



    return (
        <nav className="primary-nav">
            {/* commented out for Active Links */}
            {/* <Link to='/'>Home</Link> */}
            {/* <Link to='/about'>About</Link> */}
            {/* added for Active Links */}
            <NavLink to='/' style={navLinkStyles}>
                Home
            </NavLink>
            <NavLink to='/about' style={navLinkStyles}>
                About
            </NavLink>
            {/* added for nested routes */}
            <NavLink to='/products' style={navLinkStyles}>
                Products
            </NavLink>
            {/* added for authentication and protected routes */}
            <NavLink to='/profile' style={navLinkStyles}>
                Profile
            </NavLink>
            {
                !auth.user && (
                    <NavLink style={navLinkStyles} to='/login'>
                        Login
                    </NavLink>
                )
            }
        </nav>
    )
}