import React from 'react'

const Skills = () => (
    <div id="skills-wrapper">
        <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: 'url(./img/dot.png)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg m-3">
                        <div className="row">
                            <div className="col-a">
                                <i className="fas fa-globe-europe text-primary" style={{ fontSize: 'xx-large' }}></i>
                            </div>
                            <div className="col m-auto">
                                <h3 className="card-title m-auto">Personable + Professional</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg m-3">
                        <div className="row">
                            <div className="col-a">
                                <i className="fas fa-globe-asia text-primary" style={{ fontSize: 'xx-large' }}></i>
                            </div>
                            <div className="col m-auto">
                                <h3 className="card-title m-auto">Motivated + Passionate</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg m-3">
                        <div className="row">
                            <div className="col-a">
                                <i className="fas fa-globe-americas text-primary" style={{ fontSize: 'xx-large' }}></i>
                            </div>
                            <div className="col m-auto">
                                <h3 className="card-title m-auto">Modern + Vigorous</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Skills