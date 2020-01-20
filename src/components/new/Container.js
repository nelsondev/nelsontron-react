import React from 'react'
import './Container.css'

const Container = (
    {
        id,
        fluid=false,
        children
    }
) => {
    if (fluid)
        return (
            <div id={id} className="container-fluid mt-3">
                {children}
            </div>
        )
    else
        return (
            <div id={id} className="container mt-3">
                {children}
            </div>
        )
}

export default Container