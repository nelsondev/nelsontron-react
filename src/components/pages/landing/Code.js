import React from 'react'
import './Code.scss'

function Code() {
	return (
		<div id="code-wrapper" className="container">
			<div className="card mb-5" style={{ backgroundColor: "#222632" }}>
				<div className="card-body">
					<div className="row">
						<div className="col d-flex">
							<div className="bg-success rounded-circle mx-1" style={{ width: "20px", height: "20px" }}></div>
							<div className="bg-warning rounded-circle mx-1" style={{ width: "20px", height: "20px" }}></div>
							<div className="bg-danger rounded-circle mx-1" style={{ width: "20px", height: "20px" }}></div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col m-auto">
							<div className="text-center">
								<h3 className="text-light">Every single one of my projects is on Github. Websites, js frameworks, apps, and more.</h3>
							</div>
							<div className="text-right">
								<a href="https://github.com/nelsondev" target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-lg" role="button"><i className="fab fa-github"></i>&nbsp;Github</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Code