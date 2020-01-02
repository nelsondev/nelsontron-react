import React from 'react'

import { 
    Route, 
    Switch 
} from 'react-router-dom'

// Components
import Navbar from '../components/personal/Navbar'
import Footer from '../components/personal/Footer'

// Routes
import Home from '../pages/personal/Home'
import Portfolio from '../pages/personal/Portfolio'
import Minecraft from '../pages/personal/Minecraft'
import Contact from '../pages/personal/Contact'

import NoMatch from '../pages/personal/NoMatch'

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