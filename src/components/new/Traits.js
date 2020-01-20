import React from 'react'
import Container from './Container'

const Trait = ({ src, title, description }) => (
    <div className="card border-0 bg-transparent pt-4 d-flex flex-column" style={{ minWidth: '300px', height: '420px' }}>
        <img className="card-img-top w-25 m-auto" src={src} alt="trait"/>
        <div className="card-body m-auto w-75">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
        </div>
    </div>
)

class Traits extends React.Component {
    constructor(props) {
        super(props)

        this.traits = [
            <Trait
                src="./img/trait_github_art.svg"
                title="Collaboration"
                description="I love working with other people. Vocalizing problems and solutions is how you grow to be a healthy programmer. I've worked with teams before through training at SAIT, project collaberation, and with game development work." />,
            <Trait
                src="./img/trait_js_art.svg"
                title="Technology"
                description="It's my job to keep up to date. Being a well rounded programmer is a must-have in todays rapidly changing technological climate. New tech is coming out daily with better features; I've gotta be heavily invested in the ones I use every day." />,
            <Trait
                src="./img/trait_patt_art.svg"
                title="Creativity"
                description="Anytime anyone asks me why I love programming the word creativity comes to mind. Programming is one of the most creative and rewarding jobs you can do. I'm visually creative and programatically creative; Problems are my inspiration." />
        ]

        this.index = 0

        this.state = {
            trait: this.traits[this.index]
        }
    }

    setTrait() {
        this.setState({ trait: this.traits[this.index] })
    }

    lastTrait() {
        if (this.index !== 0)
            this.index--
        else
            this.index = this.traits.length - 1

        this.setTrait()
    }

    nextTrait() {
        if (this.index !== this.traits.length - 1)
            this.index++
        else
            this.index = 0

        this.setTrait()
    }

    render() {
        return (
            <Container>
                <div className="card border-0 bg-light">
                    <button className="btn position-absolute" style={{ 
                        left: '0', 
                        height: '100%', 
                        zIndex: '1' 
                    }} onClick={this.lastTrait.bind(this)}>
                        <h4><i class="fas fa-chevron-left"></i></h4>
                    </button>

                    {/* Insert trait element */}
                    {this.state.trait}
                    
                    <button className="btn position-absolute" style={{ 
                        right: '0', 
                        height: '100%' 
                    }} onClick={this.lastTrait.bind(this)}>
                        <h4><i class="fas fa-chevron-right"></i></h4>
                    </button>
                </div>
            </Container>
        )
    }
}

export default Traits