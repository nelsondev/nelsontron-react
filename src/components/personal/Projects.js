import React from 'react'

import $ from 'jquery'

import Project from './Project'

class Projects extends React.Component {

    constructor(props) {
        super(props)

        this._PROXY_URL = "https://cors-anywhere.herokuapp.com/";
        this._PROJECTS_URL = "/get/projects"
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: this._PROJECTS_URL,
            context: document.body
        }).done(data => {
            console.log(data)
            this.setState({projects: data})
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
                                {this.state.projects.length != 0 ? this.state.projects.forEach(this.insertProject) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects