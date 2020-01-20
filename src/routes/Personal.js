import React from 'react'

import { 
    Route, 
    Switch 
} from 'react-router-dom'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Routes
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Minecraft from '../pages/Plugins'
import Contact from '../pages/Contact'

import NoMatch from '../pages/NoMatch'

const Personal = (props) => (
    <div>
        {/* Standard navbar component */}
        <Navbar />

        <Switch>
            <Route path={props.url} component={Home} exact />
            <Route path={props.url.concat('portfolio')} component={Portfolio} exact />
            <Route path={props.url.concat('minecraft')} component={Minecraft} exact />
            <Route path={props.url.concat('contact')} component={Contact} exact />
            <Route component={NoMatch} exact />
        </Switch>

        <Footer />
    </div>
)

export default Personal