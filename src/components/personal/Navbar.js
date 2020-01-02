import React from 'react'

const Navbar = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item p-2">
                    <a href="/contact" className="btn btn-outline-info">Contact</a>
                </li>
                <li className="nav-item p-2">
                    <a className="btn btn-light" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item p-2">
                    <a href="/portfolio" className="btn btn-light">Portfolio</a>
                </li>
                <li className="nav-item p-2">
                    <a href="/minecraft" className="btn btn-light">Plugins</a>
                </li>
            </ul>
        </div>
        {/* Toggle navigation button, bootstrap auto */}
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {/* Logo on the right */}
        <a className="navbar-brand btn btn-light" href="/">
            <img className="shadow-sm" src="./img/logo_nel_no_text.svg" width="50" height="50" alt="nelsontron" />
        </a>
    </nav>
)

export default Navbar