import React from 'react'
import './Minecraft.css'

class Minecraft extends React.Component {

    componentDidMount() {
        document.title = "Nelsontron | Minecraft"
    }

    render() {
        return (
            <div id="minecraft">

                {/* navbar spacer */}
                <div style={{ height: '78px' }}></div>

                <main>
                </main>
                
            </div>
        )
    }
}

export default Minecraft
