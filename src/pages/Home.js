import React from 'react'
import './Home.css'

// Home specific components
import LinkedIn from '../components/new/LinkedIn'
import Traits from '../components/new/Traits'
import Portfolio from '../components/new/Portfolio'

import Skills from '../components/Skills'
import Profile from '../components/Profile'
import Tech from '../components/Tech'
import Github from '../components/Github'
import Dla from '../components/Dla'
import Testimonials from '../components/Testimonials'
import ContactCall from '../components/ContactCall'
import Socials from '../components/Socials'

class Home extends React.Component {

    componentDidMount() {
        document.title = "Nelsontron | Home"
    }

    render() {
        return (
            <div id="home">

                {/* navbar spacer */}
                <div style={{ height: '78px' }}></div>

                <main>
                    {/* <Linkedin /> */}

                    {/* test */}
                    <LinkedIn />
                    <Traits />
                    <Portfolio />

                    <Skills />
                    <Profile />
                    <Tech />
                    <Github />
                    <Dla />
                    {/* <Testimonials /> */}
                    <ContactCall />
                    <Socials bgcolor="bg-light" />
                </main>
                
            </div>
        )
    }

}

export default Home