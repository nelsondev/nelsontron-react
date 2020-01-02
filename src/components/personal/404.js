import React from 'react'

const Linkedin = () => (
    <div id="linkedin-wrapper">
        <div className="container pt-3 d-flex" style={{minHeight: '50vh'}}>
            <div className="jumbotron-fluid bg-transparent m-auto">
                <div className="row">
                    <div className="col-md-8 col-lg-5 col-sm-10 d-flex m-auto">
                        <div className="m-auto mt-3 mb-3">
                            <h1>I think you're lost..</h1>
                            <p>404 page not found. Maybe someone gave you the wrong URL.</p>
                            <hr />
                            <p className="lead">
                                <a className="btn btn-link" href="/"
                                    role="button">
                                    Home
                                </a>
                                <a className="btn btn-link" href="/portfolio"
                                    role="button">
                                    Portfolio
                                </a>
                                <a href="/minecraft" className="btn btn-link" role="button">
                                    Plugins
                                </a>
                                <a href="/Contact" className="btn btn-link" role="button">
                                    Contact
                                </a> — <br/>
                                <a href="https://www.linkedin.com/in/nelsontron/" className="btn btn-link" role="button">
                                    Linkedin
                                </a>
                                <a href="https://github.com/nelsondev" className="btn btn-link" role="button">
                                    Github
                                </a>
                                <a href="https://nelsondev.itch.io/" className="btn btn-link" role="button">
                                    Itch.io
                                </a>
                                <a href="https://stackoverflow.com/users/11206432/nelson-mccullough" className="btn btn-link" role="button">
                                    Stackoverflow
                                </a>
                                <a href="https://dumbluckarts.com" className="btn btn-link" role="button">
                                    Dumbluckarts
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="./img/logo_nel_edited.svg" width="100%" height="100%"
                            alt="Portrait of Nelson McCullough (Nelsontron)" style={{ objectFit: 'cover', opacity: '0.5' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Linkedin