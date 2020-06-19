import React from 'react'
import './Menu.scss'

import {Link} from 'react-router-dom'

function Menu() {
	return (
		<div id="navigation-wrapper">
			<div className="navbar navbar-expand-md navbar-light bg-transparent">
				{/* Main brand */}
				<Link to="/" className="navbar-brand">
					<img src="/img/logo-small.svg" alt="main menu bar logo" loading="lazy" width="50" height="50" />
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-nav"><span className="navbar-toggler-icon"></span></button>
				{/* Nav items */}
				<div className="collapse navbar-collapse" id="collapse-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/contact" className="nav-link btn btn-info text-light px-3 mx-2">Contact</Link>
						</li>
						<li className="nav-item">
							<Link to="/portfolio" className="nav-link btn btn-light px-3 mx-2">Portfolio</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link btn btn-light px-3 mx-2">Blog</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu