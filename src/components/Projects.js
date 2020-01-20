import React from 'react'

import Project from './Project'

class Projects extends React.Component {

    constructor(props) {
        super(props)

        this._PROJECTS_URL = "https://servetron.xyz/get/projects"
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch(this._PROJECTS_URL)
        .then(results => results.json())
        .then(data => {
            this.setState({projects: data})
        })
        .catch(err => {
            console.log("Unable to fetch project data: " + err)
        })
    }

    insertProject(obj) {
        return (
            <Project key={obj.id}
            imageSrc={obj.imageSrc}
            name={obj.name}
            categories={obj.categories}
            description={obj.description}
            sourceLink={obj.sourceLink}
            downloadLink={obj.downloadLink} />
        )
    }

    render() {
        return (
            <div id="portfolio-content-wrapper">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card-columns">
                                {this.state.projects.map(this.insertProject)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects