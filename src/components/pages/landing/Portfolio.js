import React from 'react'
import './Portfolio.scss'

import {Link} from 'react-router-dom'

function Portfolio() {
	return (
		<div id="portfolio-wrapper" className="container">
			<div className="card border-0 bg-transparent mb-5">
				<div className="card-body">
					<div className="row">
						<div className="col-4 d-flex">
							<img src="/img/logo_nel.svg" className="m-auto" style={{width:"100%"}} alt="" />
						</div>
						<div className="col m-auto">
							<h3>Check out my portfolio</h3>
							<p>&nbsp;Favorite projects, developer story.</p>
							<Link to="/portfolio" className="btn btn-outline-dark" role="button"><i className="fas fa-robot"></i>&nbsp;Portfolio</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio