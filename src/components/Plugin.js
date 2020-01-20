import React from 'react'

const Plugin = ({
    name,
    categories,
    description,
    sourceLink,
    downloadLink
}) => (
        <div className="col-md">
            <div className="card m-3">
                <div className="card-body d-flex flex-column">
                    <div className="row">
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

                    <div className="row justify-content-end mt-auto">
                        <div className="col-a">
                            <a href={sourceLink} className="btn btn-link mr-2" target="_blank" rel="noopener noreferrer">
                                Source
                    <i className="fa fa-cube" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="col-a">
                            <a href={downloadLink} className="btn btn-link mr-2" target="_blank" rel="noopener noreferrer">
                                Download
                    <i className="fa fa-download" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

export default Plugin