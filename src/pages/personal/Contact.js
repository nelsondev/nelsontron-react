import React from 'react'
import './Contact.css'

import Socials from '../../components/personal/Socials'

class Contact extends React.Component {

    componentDidMount() {
        document.title = "Nelsontron | Contact"
    }

    render() {
        return (
            <div id="contact">

                {/* navbar spacer */}
                <div style={{ height: '78px' }}></div>

                <main>
                    <div id="contact-wrapper">
                        <div id="contact" className="bg-light">
                            <div className="container">
                                <div className="row pt-5 pb-5">
                                    <div className="col-sm-7 m-auto">
                                        <h3>Send me a message —</h3>
                                        <form action="/post/contact" method="POST">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="ContactFirstName">First name:</label>
                                                        <input type="text" className="form-control" name="ContactFirstName"
                                                            id="contactFirstName" aria-describedby="FirstNameHelp" placeholder="Tim.." />
                                                        <small id="FirstNameHelp" className="form-text text-muted invisible">Like John..</small>
                                                    </div>
                                                    <div className="col">
                                                        <label for="ContactLastName">Last name:</label>
                                                        <input type="text" className="form-control" name="ContactLastName"
                                                            id="contactLastName" aria-describedby="LastNameHelp" placeholder="Apple.." />
                                                        <small id="LastNameHelp" className="form-text text-muted invisible">Like Smith..</small>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="ContactEmail">Email:</label>
                                                        <input type="email" className="form-control" name="ContactEmail"
                                                            id="contactEmail" aria-describedby="EmailHelp" placeholder="tim@apple.com.." />
                                                        <small id="EmailHelp" className="form-text text-muted invisible">Like john@outlook.com..</small>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label for="ContactText">What would you like to say?</label>
                                                        <textarea className="form-control" name="ContactText" id="contactText" rows="3"
                                                            style={{maxHeight: '112px', minHeight: '38px'}}></textarea>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col">
                                                        <button type="submit" className="btn btn-info">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-4 m-auto">
                                        <img src="./img/logo_nel_edited.svg" className="w-100" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Socials bgcolor="bg-light" />
                </main>

            </div>
        )
    }
}

export default Contact