import React from 'react'
import './Portfolio.scss'

import Post from './Post'

function Portfolio(props) {
    return (
        <div id="blog-content-wrapper" className="container mb-5">
            <div className="card-columns">
                {props.data.map((item, key) =>
                    <Post key={key} link={item.link} title={item.title} content={item.content} images={item.images} />)}
            </div>
        </div>
    )
}

export default Portfolio