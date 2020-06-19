import React from 'react'
import './Dla.scss'

function Dla() {
	return (
		<div id="dla-wrapper">
			<div className="container-fluid mb-5" style={{ backgroundImage: "url(/img/branding_gallahad.png", backgroundAttachment: "fixed" }}>
				<div className="container py-5">
					<div className="card border-0 bg-transparent">
						<div className="card-body">
							<div className="row">
								<div className="col-4 d-flex">
									<img src="/img/logo_dla.svg" className="m-auto card-img" alt="dla logo" />
								</div>
								<div className="col my-auto text-white">
									<h4>I work with some pretty amazing people.</h4>
									<p>Game development is another one of my passions, and I work with Link few others with the same passion. I do weekly game jams when I can, and currently have 2 released games on <a href="https://dumbluckarts.itch.io" target="_blank" rel="noopener noreferrer" className="bg-danger text-white">itch.io</a>.</p>
									<div className="d-flex">
										<a href="https://dumbluckarts.com" target="_blank" rel="noopener noreferrer" className="btn btn-danger ml-auto" role="button"><i className="far fa-eye"></i>&nbsp;&nbsp;Join us</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dla