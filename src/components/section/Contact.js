import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {

    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <>
                    <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                    </div>
                </>

                <div className="container">
                    <div className="git-cont row">
                        {/*
                        <div className="col-12 col-sm-6 half">
                            <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                                <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                                <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                                <textarea id="msg" name="message" placeholder="Message" required></textarea>
                                <button style={{ cursor: 'pointer' }} type="submit">Send Message</button>
                            </form>
                        </div>
                        */}
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                <h3>{contact.students.baris}</h3>
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin.baris}><i className="fab fa-linkedin"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram.baris}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github.baris}><i className="fab fa-github"></i></a>}<br />
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                <h3>{contact.students.gokay}</h3>
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin.gokay}><i className="fab fa-linkedin"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram.gokay}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github.gokay}><i className="fab fa-github"></i></a>}<br />
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                <h3>{contact.students.onur}</h3>
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin.onur}><i className="fab fa-linkedin"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram.onur}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github.onur}><i className="fab fa-github"></i></a>}<br />
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                <h3>{contact.students.kaan}</h3>
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin.kaan}><i className="fab fa-linkedin"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram.kaan}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github.kaan}><i className="fab fa-github"></i></a>}<br />
                                </div>
                                {<i className="fas"></i>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )

}

export default Contact
