import React from 'react'
import './Landing.scss'

function Landing() {
	return (
		<div id="landing-wrapper" className="container">
			<div id="landing" className="card bg-transparent border-0 py-5">
				<div className="row">
					<div className="col-md-6 col-lg-7 col-xl-8 my-auto pb-3">
						{/* Headings */}
						<h1>I'm already looking forward to working with you.</h1>
						<p className="lead">I create websites, web apps, web frameworks, applications, apps, and anything I can get my hands on.</p>
						<a href="https://www.linkedin.com/in/nelsontron" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-lg ml-auto">
							<i className="fab fa-linkedin"></i>
								&nbsp;Linkedin
						</a>
					</div>
					<div className="col d-flex">
						<img src="/img/portrait.jpg" alt="" className="rounded ml-auto" style={{ width: "100%" }} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing