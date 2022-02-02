import React from "react";
import { Link, NavLink } from "react-router-dom";


// Pakai Link to bukan a href, agar ketika berpindah halaman tidak melakukan refresh
// NavLink, mirip Link tapi menambahkan class untuk active link, jadi bisa menambahkan style yg berbeda pada link
const Navbar = () => {
    return (
        <nav className="ui raised very padded segment">
            <a href="" className="ui teal inverted segment">Test</a>
            <div className="ui right floated header">
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><NavLink to="/about">About</NavLink></button>
                <button className="ui button"><NavLink to="/contact">Contact</NavLink></button>
            </div>
        </nav>
    )
}

export default Navbar;