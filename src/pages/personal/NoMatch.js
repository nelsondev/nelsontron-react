import React from 'react'
import './NoMatch.css'

// Page components
import NotFound from '../../components/personal/404'

const NoMatch = () => (
    <div id="404">

        {/* navbar spacer */}
        <div style={{ height: '78px' }}></div>

        <main>
            <NotFound />
        </main>

    </div>
)

export default NoMatch