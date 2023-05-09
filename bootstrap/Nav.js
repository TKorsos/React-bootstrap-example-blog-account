import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark text-bg-dark sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/account" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-bg-dark">
                                <Link to="/account/signin" className="dropdown-item">Sign in</Link>
                                <Link to="/account/signup" className="dropdown-item">Sign up</Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}