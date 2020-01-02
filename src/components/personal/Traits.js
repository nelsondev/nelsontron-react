import React from 'react'

const Traits = () => (
    <div id="traits-wrapper">
        <div className="container pt-5 pb-5">
            <div id="traits-scrollbox" className="d-flex overflow-auto">
                <div className="trait card border-0 bg-transparent pt-4 d-flex flex-column" style={{ minWidth: '300px' }}>
                    <img className="card-img-top w-50 m-auto" src="./img/trait_github_art.svg" alt="" />
                    <div className="card-body m-auto">
                        <h3 className="card-title">Collaboration</h3>
                        <p className="card-text">I love working with other people. Vocalizing problems and solutions
                            is how you grow to be a healthy programmer. I've worked with teams before through
        training at SAIT, project collaberation, and with game development work.</p>
                    </div>
                </div>
                <div className="trait card border-0 bg-transparent pt-4 d-flex flex-column" style={{ minWidth: '300px' }}>
                    <img className="card-img-top w-50 m-auto" src="./img/trait_js_art.svg" alt="" />
                    <div className="card-body m-auto">
                        <h3 className="card-title">Technology</h3>
                        <p className="card-text">It's my job to keep up to date. Being a well rounded programmer is a
                            must-have in todays rapidly changing technological climate. New tech is coming out daily
        with better features; I've gotta be heavily invested in the ones I use every day.</p>
                    </div>
                </div>
                <div className="trait card border-0 bg-transparent pt-4 d-flex flex-column" style={{ minWidth: '300px' }}>
                    <img className="card-img-top w-50 m-auto" src="./img/trait_patt_art.svg" alt="" />
                    <div className="card-body m-auto">
                        <h3 className="card-title">Creativity</h3>
                        <p className="card-text">Anytime anyone asks me why I love programming the word creativity comes to mind. Programming is one of the most creative and rewarding jobs you can do. I'm visually creative and programatically creative; Problems are my inspiration.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Traits