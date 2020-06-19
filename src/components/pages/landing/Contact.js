import React from 'react'
import './Contact.scss'

import { Link } from 'react-router-dom'

function Contact() {
	return (
		<div id="contact-wrapper" className="container">
			<div className="card mb-5 bg-transparent border-0">
				<div className="card-body">
					<div className="row mb-4">
						<a href="https://www.linkedin.com/in/nelsontron/" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://github.com/nelsondev" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
							<i className="fab fa-github-alt"></i>
						</a>
						<a href="https://nelsondev.itch.io" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
							<i className="fab fa-itch-io"></i>
						</a>
						<a href="https://stackoverflow.com/users/11206432/nelson-mccullough?tab=profile" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
							<i className="fab fa-stack-overflow"></i>
						</a>
					</div>
					<div className="row">
						<div className="col-6 m-auto">
							<h4>I'm already looking forward to working with you. Give me Link shout, I'd love to hear your ideas.</h4>
							<Link to="/contact" className="btn btn-info" role="button">Contact</Link>
						</div>
						<div className="col d-flex">
							<img src="/img/logo_nel_edited.svg" className="m-auto" alt="" style={{ width: "100%" }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact