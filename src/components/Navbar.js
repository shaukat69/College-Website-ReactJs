import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className="main-head">
                <img className="main-logo" src={useLocation().pathname === "/alumni" ? '/logo1.png' : '/logo.png'} alt="Logo Loading...." />
                <h1 className="main-heading">ANJUMAN ISLAM JANJIRA SIDI ZAFAR SHEKHANI MEMORIAL PRIVATE INDUSTRIAL TRAINING INSTITUTE MURUD JANJIRA</h1>
            </div>
            <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="" to="/"></Link>
                <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light navhover dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/mechanical">Mechanical Diesel</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/electrician">Electrician</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/motor">Mechanic Motor Vehicle</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/welder">Welder</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="*">Academics</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light navhover dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admission
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/fees">Admission Fees</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/rules">Rules Of Admission</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/alumni">Alumni Association</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/photos">Photo Gallery</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light navhover dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/management">Management</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/teaching">Teaching Staff</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/nonteaching">Non-Teaching Staff</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light navhover" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
