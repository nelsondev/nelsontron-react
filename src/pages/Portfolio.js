import React from 'react'
import './Portfolio.css'
import Projects from '../components/Projects'

class Portfolio extends React.Component {

    componentDidMount() {
        document.title = "Nelsontron | Portfolio"
    }

    render() {
        return (
            <div id="portfolio">

                {/* navbar spacer */}
                <div style={{ height: '78px' }}></div>

                <main>
                    <div id="portfolio" className="bg-light pt-4 pb-5">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-6 ml-auto mt-auto mb-auto">
                                    <h3>I've always got my mind on a project.</h3>
                                    <p>My portfolio is a mix of all my passions. I've got websites, boilerplates, applications,
                                        minecraft mods, video games and more. The best way of getting to know me is through my
                                        personal projects.</p>
                                </div>
                                <div className="col-5 m-auto">
                                    <img src="./img/branding_nel.svg" className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Projects />

                </main>

            </div>
        )
    }
}

export default Portfolio