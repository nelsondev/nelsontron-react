import React from 'react'
import './Home.css'

// Home specific components
import Linkedin from '../../components/personal/Linkedin'
import Traits from '../../components/personal/Traits'
import OldLogo from '../../components/personal/OldLogo'
import Skills from '../../components/personal/Skills'
import Profile from '../../components/personal/Profile'
import Tech from '../../components/personal/Tech'
import Github from '../../components/personal/Github'
import Dla from '../../components/personal/Dla'
import Testimonials from '../../components/personal/Testimonials'
import ContactCall from '../../components/personal/ContactCall'
import Socials from '../../components/personal/Socials'

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
                    <Linkedin />
                    <Traits />
                    <OldLogo />
                    <Skills />
                    <Profile />
                    <Tech />
                    <Github />
                    <Dla />
                    <Testimonials />
                    <ContactCall />
                    <Socials bgcolor="bg-light" />
                </main>
                
            </div>
        )
    }

}

export default Home