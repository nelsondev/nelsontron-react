import React from 'react'
import Container from './Container'
import {Link} from 'react-router-dom'

const Portfolio = () => (
    <Container>
        <div className="row pl-3">
            <div className="col-a m-auto p-3">
                <img src="./img/logo_nel.svg" width="100%" alt="" />
            </div>
            <div className="col">
                <div className="jumbotron jumbotron-fluid rounded bg-light">
                    <div className="container">
                        <h3>Check out my portfolio</h3>
                        <Link to="/portfolio">
                            <a className="btn btn-outline-dark" href="/portfolio" role="button">
                                <i className="fas fa-atom pr-2"></i>
                                Portfolio</a>
                        </Link>
                        <span className="pl-2">Favorite projects, developer story.</span>
                    </div>
                </div>
            </div>
        </div>
    </Container>

)

export default Portfolio