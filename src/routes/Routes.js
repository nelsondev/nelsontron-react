import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Personal from './Personal'
import Files from './Files'

class Routes extends React.Component {
    constructor(props) {
        super(props)

        this._PERSONAL_URL = "/"
        this._FILES_URL = "/movies/"
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Personal website routes */}
                    <Route path="/">
                        <Personal url={this._PERSONAL_URL} />
                    </Route>
                    {/* File website routes */}
                    <Route path={this._FILES_URL}>
                        <Files url={this._FILES_URL} />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes