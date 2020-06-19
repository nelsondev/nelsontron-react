import React from 'react'
import './Blog.scss'

import Post from './Post'

function Blog(props) {
    return (
        <div id="blog-content-wrapper" className="container mb-5">
            {props.data.map((item, key) =>
                <Post key={key} title={item.title} published={item.published} content={item.content} />)}
        </div>
    )
}

export default Blog