import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Personal from './Personal'

// Originally this react app had 2 more separate "routes."

class Routes extends React.Component {
    constructor(props) {
        super(props)

        // Personal url root
        this._PERSONAL_URL = "/"
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Personal website routes */}
                    <Route path="/">
                        {/* Root url is passed into route */}
                        <Personal url={this._PERSONAL_URL} />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes