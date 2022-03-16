import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ headerData, currentRoute }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        <NavLink className="nav-link" to="/add-movie">Add Movies</NavLink>
                        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;