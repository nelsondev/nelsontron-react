import React from 'react'

const Socials = ({ bgcolor }) => (
    <div className={bgcolor.concat(" container-fluid")}>
        <div className="container pt-5 pb-5">
            <div className="row d-flex justify-content-center">
                <div className="col m-auto d-flex p-2">
                    <a className="btn btn-light btn-lg m-auto" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nelsontron/">
                        <i className="fab fa-linkedin" style={{ fontSize: '38pt' }}>
                            <p className="main-font m-0" style={{
                                fontSize: '14pt',
                                fontFamily: 'Nunito, sans-serif'
                            }}>linkedin</p>
                        </i>
                    </a>
                </div>
                <div className="col m-auto d-flex p-2">
                    <a className="btn btn-light btn-lg m-auto" target="_blank" rel="noopener noreferrer" href="https://github.com/nelsondev/">
                        <i className="fab fa-github-square" style={{ fontSize: '38pt' }}>
                            <p className="main-font m-0" style={{
                                fontSize: '14pt',
                                fontFamily: 'Nunito, sans-serif'
                            }}>github</p>
                        </i>
                    </a>
                </div>
                <div className="col m-auto d-flex p-2">
                    <a className="btn btn-light m-auto" target="_blank" rel="noopener noreferrer" href="https://nelsondev.itch.io/">
                        <i className="fab fa-itch-io" style={{ fontSize: '38pt' }}>
                            <p className="main-font m-0" style={{
                                fontSize: '14pt',
                                fontFamily: 'Nunito, sans-serif'
                            }}>itch.io</p>
                        </i>
                    </a>
                </div>
                <div className="col m-auto d-flex p-2">
                    <a className="btn btn-light btn-lg m-auto" target="_blank" rel="noopener noreferrer"
                        href="https://stackoverflow.com/users/11206432/nelson-mccullough">
                        <i className="fab fa-stack-overflow" style={{ fontSize: '38pt' }}>
                            <p className="main-font m-0" style={{
                                fontSize: '14pt',
                                fontFamily: 'Nunito, sans-serif'
                            }}>stack</p>
                        </i>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Socials