import React from 'react'

const Linkedin = () => (
    <div id="linkedin-wrapper">
        <div className="container pt-3 pb-5">
            <div className="jumbotron-fluid bg-transparent">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-sm-10 d-flex m-auto">
                        <div className="m-auto mt-3 mb-3">
                            <h3>I'm already looking forward to working with you.</h3>
                            <p>I create websites, web apps, web frameworks, applications, apps, and anything I can
                        get my hands on.</p>
                            <hr />
                            <p className="lead">
                                <a className="btn btn-outline-primary" href="https://www.linkedin.com/in/nelsontron/"
                                    role="button">
                                    Linked
                                <i className="fab fa-linkedin"></i>
                                </a>
                                <small> Recent education, experience, profile.</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="rounded shadow" src="./img/branding_portrait.jpg" width="100%" height="100%"
                            alt="Portrait of Nelson McCullough (Nelsontron)" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Linkedin