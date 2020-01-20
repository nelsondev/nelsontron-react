import React from 'react'
import Container from './Container'
const LinkedIn = () => {
    return (
        <Container>
            <div className="card border-0">
                <div className="row">
                    <div className="col-md m-auto">
                        <div className="card-body">
                            <h3>I'm already looking forward to working with you.</h3>
                            <hr />
                            <p>I create websites, web apps, web frameworks, applications, apps, and anything I can get my hands on.</p>
                            <a className="btn btn-outline-primary" href="https://www.linkedin.com/in/nelsontron/" role="button">
                                Linked
                                <i className="fab fa-linkedin ml-2"></i>
                            </a>
                            <span className="ml-2">Recent education, experience, profile.</span>
                        </div>
                    </div>
                    <div className="col-md">
                        <img className="card-img-top rounded" src="./img/branding_portrait.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LinkedIn