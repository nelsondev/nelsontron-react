import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div id="blog-header-wrapper" className="container-fluid p-0 mb-5">
            <div className="bg-danger py-5 text-light">
                <div className="container">
                    <h1>Nelsondev Log</h1>
                    <p>Personal posts, game development, and professional endeavors.</p>
                </div>
            </div>
        </div>
    )
}

export default Header