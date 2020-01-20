import React from 'react'

const Github = () => (
    <div id="github-wrapper">
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src="./img/branding_js_code.svg" className="github-branding shadow" width="100%" alt="" />
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-lg-9 col-md-9 col-sm-10 m-auto">
                    <h3>Every single one of my projects is on <a className="bg-dark text-white shadow"
                        href="https://github.com/nelsondev">Github</a>. Websites, js frameworks, apps, and more.
                </h3>
                    <a className="btn btn-info shadow" href="https://github.com/nelsondev/tron" target="_blank" rel="noopener noreferrer" role="button">
                        Github
                    <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Github