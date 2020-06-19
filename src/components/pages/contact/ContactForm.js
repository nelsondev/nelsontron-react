import React from 'react'
import './ContactForm.scss'

function ContactForm() {
    return (
        <div id="contact-form-wrapper" className="container">
            <div className="row my-4">
                <a href="https://www.linkedin.com/in/nelsontron/" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/nelsondev" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
                    <i className="fab fa-github-alt"></i>
                </a>
                <a href="https://nelsondev.itch.io" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
                    <i className="fab fa-itch-io"></i>
                </a>
                <a href="https://stackoverflow.com/users/11206432/nelson-mccullough?tab=profile" target="_blank" rel="noopener noreferrer" className="col display-4 text-center text-dark">
                    <i className="fab fa-stack-overflow"></i>
                </a>
            </div>
            <div className="row mb-5">
                <div className="col-md m-auto">
                    <h3>Send me a message!</h3>
                    <p>The best way to contact me is through any of the below methods. I'm checking each of these methods frequently and will get back to you as soon as I can.</p>
                    <hr/>
                    <h6>Email: </h6>
                    <a href="mailto:nelsontron@outlook.com">nelsontron@outlook.com</a>
                    <h6>Phone: </h6>
                    <a href="tel:4037017900">(403) 701-7900</a>
                    <h6>Linkedin: </h6>
                    <a href="https://www.linkedin.com/in/nelsontron/">https://www.linkedin.com/in/nelsontron/</a>
                </div>
                <div className="col-md d-none d-md-block d-lg-block d-xl-block">
                    <img id="logo-img" src="/img/logo_nel_edited.svg" className="m-auto" alt="" style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default ContactForm