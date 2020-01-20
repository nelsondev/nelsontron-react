import React from 'react'

const Dla = () => (
    <div id="dla-wrapper">
        <div className="container-fluid pt-5 pb-5"
            style={{
                backgroundImage: 'url(./img/branding_gallahad.png)',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 d-flex justify-content-center">
                        <img src="./img/logo_dla.svg" className="m-auto github-branding" style={{ width: '256px' }} alt="" />
                    </div>
                    <div className="col-sm-6 text-light m-auto pt-3">
                        <h4>I work with some pretty amazing people.</h4>
                        <p>Game development is another one of my passions, and I work with a few others with the same
                            passion. I do weekly game jams when I can, and currently have 2 released games on
                    <a className="text-white text-underlined bg-danger" target="_blank" rel="noopener noreferrer" href="https://itch.io/">itch.io.</a></p>
                        <a className="btn btn-danger" href="https://dumbluckarts.com/" role="button">
                            Join us
                        <i className="fa fa-eye ml-2" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Dla