import React from 'react'
import './Post.scss'

function Post(props) {
    console.log(props.link)
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="card text-decoration-none text-dark portfolio-post" style={{backgroundColor:"transparent"}}>
            { props.images && props.images[0] ? <img src={props.images[0].url} alt={props.title} className="card-img"/> : undefined}
            
            <div className="card-body">
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </a>
    )
}

export default Post