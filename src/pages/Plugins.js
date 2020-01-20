import React from 'react'
import './Plugins.css'
import PluginsComponent from '../components/Plugins'
import Contact from '../components/ContactCall'
import Socials from '../components/Socials'

class Plugins extends React.Component {

    componentDidMount() {
        document.title = "Nelsontron | Portfolio"
    }

    render() {
        return (
            <div id="plugins">

                {/* navbar spacer */}
                <div style={{ height: '78px' }}></div>

                <main>
                    <div id="minecraft-wrapper">
                        <div className="container">
                            <div className="card border-0">
                                <div className="row">
                                    <div className="col d-flex">
                                        <img className="w-75 m-auto" src="./img/minecraft-block.png" alt="" />
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card-body">
                                            <h3 className="card-title">I make MineCraft plugins for <u>fun</u>.</h3>
                                            <p className="card-text">&emsp;Every year or so it's become a tradition for
                                                my
                                                friends and I to make a MineCraft server. It's mostly to catch up on
                                                recent
                                                changes to the game, and to relive old memories, but each time gets
                                                a little
                                                repetative playing vanilla survival MineCraft. I still make the
                                                occasional
                                                plugin or MineCraft mod to make the game fresh and fun for my
                                                friends.</p>
                                            <h4 className="card-title">Check out a couple of my plugins for
                                                    <a href="https://bukkit.org" target="_blank" rel="noopener noreferrer"> Bukkit</a>/<a href="https://www.spigotmc.org/"
                                                    target="_blank" rel="noopener noreferrer">Spigot</a>/<a href="https://papermc.io/" target="_blank" rel="noopener noreferrer">Paper</a>.
                                            </h4>
                                            <p className="card-text">&emsp;They're mostly just a fun programming
                                                challenge for
                                                me. The MineCraft / Bukkit api is where I started programming, and
                                                it's fun
                                                to use something familiar. I always find it mandatory to keep things
                                                simple,
                                                setup easy, and user friendly / intuative. MineCraft plugins are
                                                usually a
                                                little heavyweight feeling, and I aim to minimize that as much as I
                                                can.</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-5" />
                            </div>
                        </div>
                    </div>


                    <PluginsComponent />
                    <Contact />
                    <Socials bgcolor="bg-light" />

                </main>

            </div>
        )
    }
}

export default Plugins