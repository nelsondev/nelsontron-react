import React from 'react'

const Project = ({
    imageSrc,
    name,
    categories,
    description,
    sourceLink,
    downloadLink
}) => (
        <div className="card m-3 overflow-hidden" style={{maxHeight:'fit-content'}}>
            {imageSrc ?
                <img className="card-img" src={imageSrc} alt={name}/> : <div></div>}
            <div className="card-body d-flex flex-column">
                <div className="row mt-auto">
                    <div className="col">
                        <h4 className="card-title">{name}</h4>
                    </div>
                    <div className="col-a ml-3 mr-3 mb-3">
                        {categories.split(',').forEach(cat => {
                            return (<span className="badge badge-light">{cat}</span>)
                        })}
                    </div>
                </div>

                <p className="card-text">{description}</p>

                <div className="row justify-content-end">
                    <div className="col-a">
                        <a href={sourceLink} className="btn btn-link mr-2" target="_blank" rel="noopener noreferrer">
                            Source
                    <i className="fa fa-cube pl-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="col-a">
                        <a href={downloadLink} className="btn btn-link mr-2" target="_blank" rel="noopener noreferrer"> 
                            Download
                    <i className="fa fa-download pl-2" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

export default Project