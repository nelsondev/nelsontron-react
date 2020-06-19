import React from 'react'
import './Footer.scss'

import {Link} from 'react-router-dom'

function Footer() {
	return (
		<div id="footer-wrapper" className="container">
			<div className="row">
				<div className="col-md">
					<h5>Contact</h5>
					<hr />
					<nav className="nav flex-column">
						<span className="nav-link">Nelson McCullough @</span>
						<a href="tel:4037017900" className="nav-link">(403) 701-7900</a>
						<a href="mailto:nelsontron@outlook.com" className="nav-link">nelsontron@outlook.com</a>
					    <a href="/resume.html" className="nav-link">Resume</a>
					</nav>
				</div>
				<div className="col">
					<h5>Social</h5>
					<hr />
					<nav className="nav flex-column">
						<a href="https://www.linkedin.com/in/nelsontron/" target="_blank" rel="noopener noreferrer" className="nav-link">Linkedin</a>
						<a href="https://github.com/nelsondev" target="_blank" rel="noopener noreferrer" className="nav-link">Github</a>
						<a href="https://nelsondev.itch.io" target="_blank" rel="noopener noreferrer" className="nav-link">Itch.io</a>
						<a href="https://stackoverflow.com/users/11206432/nelson-mccullough?tab=profile" target="_blank" rel="noopener noreferrer" className="nav-link">StackOverflow</a>
						<a href="https://dumbluckarts.com" target="_blank" rel="noopener noreferrer" className="nav-link">Dumbluckarts</a>
					</nav>
				</div>
				<div className="col">
					<h5>Links</h5>
					<hr />
					<Link to="/" className="nav-link">Home</Link>
					<Link to="/portfolio" className="nav-link">Portfolio</Link>
					<Link to="/contact" className="nav-link">Contact</Link>
					<a href="#top" className="nav-link">Top</a>
				</div>
			</div>
			<div className="row my-5">
				<div className="col text-center">
					<small>Copyright © Nelson McCullough. All rights reserved.</small>
				</div>
			</div>
		</div>
	)
}

export default Footer