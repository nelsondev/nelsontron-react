import React from 'react'

const OldLogo = () => (
    <div id="old-logo-wrapper">
        <div className="container pt-5 pb-5">
            <div className="row pl-3">
                <div className="col-a m-auto">
                    <img src="./img/logo_nel.svg" width="100%" alt="" />
                </div>
                <div className="col">
                    <div className="jumbotron jumbotron-fluid rounded bg-light">
                        <div className="container">
                            <h3>Check out my portfolio</h3>

                            <a className="btn btn-outline-dark" href="/portfolio" role="button">
                                <i className="fas fa-atom pr-2"></i>
                                Portfolio
                        </a>
                            <span>Favorite projects, developer story.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default OldLogo