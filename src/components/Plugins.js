import React from 'react'

import Plugin from './Plugin'

class Projects extends React.Component {

    constructor(props) {
        super(props)

        this._PLUGINS_URL = "https://servetron.xyz/get/plugins"
        this.state = {
            plugins: []
        }
    }

    componentDidMount() {
        fetch(this._PLUGINS_URL)
            .then(results => results.json())
            .then(data => {
                this.setState({ plugins: data })
            })
            .catch(err => {
                console.log("Unable to fetch plugin data: " + err)
            })
    }

    insertPlugin(obj) {
        return (
            <Plugin key={obj.id}
                name={obj.name}
                categories={obj.categories}
                description={obj.description}
                sourceLink={obj.sourceLink}
                downloadLink={obj.downloadLink} />
        )
    }

    render() {
        return (
            <div id="plugins">
                <div className="container mt-3">
                    <div className="card-columns">
                        <div className="row">
                        {this.state.plugins.map(this.insertPlugin)}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects