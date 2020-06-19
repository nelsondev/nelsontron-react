import React from 'react'
import './Post.scss'

function Post({ published, title, content }) {
    return (
        <div className="row bg-light my-3 rounded">
            <div className="col p-4">
                <h3 className="d-inline">{title}&nbsp;</h3>
                <mark className="d-inline">{published ? published.split("T")[0].replace(/-/g, " ") : undefined}</mark>
                <hr/>
                <span className="d-flex flex-column" dangerouslySetInnerHTML={{__html: content}}></span>
            </div>
        </div>
    )
}

export default Post