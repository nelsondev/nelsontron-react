import React from 'react'

const Footer = () => (
    <div className="container pt-5 pb-5">
        <div className="row pt-5 pb-5">
            <div className="col-md">
                <div className="card m-2 border-0">
                    <div className="card-body">
                        <h6><strong>Contact:</strong></h6>
                        <hr />
                        <ul className="list-group">
                            <li className="list-group-item border-0 p-1 pl-3">
                                Nelson McCullough @
                        </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                phone:
                            <a href="tel:4037017900">(403) 701-7900</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="mailto:contact@nelsontron.com">contact@nelsontron.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card m-2 border-0">
                    <div className="card-body">
                        <h6><strong>Socials:</strong></h6>
                        <hr />
                        <ul className="list-group">
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="https://www.linkedin.com/in/nelsontron/">Linkedin</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="https://github.com/nelsondev">GitHub</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="https://nelsondev.itch.io">Itch.io</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="https://stackoverflow.com/users/11206432/nelson-mccullough">Stackoverflow</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="https://dumbluckarts.com/">Dumbluckarts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card m-2 border-0">
                    <div className="card-body">
                        <h6><strong>Links:</strong></h6>
                        <hr />
                        <ul className="list-group">
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="/home">Home</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="/portfolio">Portfolio</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="/minecraft">Plugins</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="list-group-item border-0 p-1 pl-3">
                                <a href="#top">
                                    Top
                                <i className="fas fa-long-arrow-alt-up pl-2" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col text-center">
                <small>Copyright &copy; Nelson McCullough. All rights reserved.</small>
            </div>
        </div>
    </div>
)

export default Footer