import React from 'react';
import '../common/Common.css';
import appDev from '../images/app-development.svg';
let formData = {};
const Contact = () => {
    return <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <form onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input required={true} type="text" onChange={handleChange} className="form-control" id="name" placeholder="Your name here..." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Your Email</label>
                                        <input required={true} type="email" onChange={handleChange} className="form-control" id="email_id" placeholder="someone@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="response">Ask here</label>
                                        <textarea required={true} onChange={handleChange} className="form-control" id="response" rows="3" placeholder="your thoughts here..."></textarea>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-primary mb-2" >Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={appDev} className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

const sendEmail = (event) => {
    event.preventDefault();
    console.log("mail sent", event.target);
    console.log(formData)
}

const handleChange = (event) => {
    formData[event.target.id] = event.target.value;
}

export default Contact;