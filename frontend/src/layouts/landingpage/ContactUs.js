import profile2 from "../../assets/images/profile2.webp";
import { useState } from 'react';

const ContactUs = () => {

    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullNameValue = event.target.elements.fullName.value;
        const messageValue = event.target.elements.message.value;
        const emailValue = event.target.elements.email.value;

        fetch('https://msavvy-backend.onrender.com/api/contactus/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: fullNameValue,
                email: emailValue,
                message: messageValue,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    // Assuming the presence of an 'id' property indicates a successful submission
                    setSuccessMessage('Message submitted successfully');
                    setFullName('');
                    setEmail('');
                    setMessage('');
                } else {
                    // Handle error, e.g., show an error message
                    setSuccessMessage('Failed to submit message');
                }
            })
            .catch(error => {
                console.error('Error submitting comment:', error);
                setSuccessMessage('An error occurred while submitting the comment');
                setFullName('');
                setEmail('');
                setMessage('');
            });
    };

    return (
        <section className="py-3 pt-6" id="contact">
            <div className="container">
                <div className="row">
                    <div className="mb-2 mt-5 text-center">
                        <h3 className="z-index-1 position-relative">Enjoying our Content</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-12 p-3 d-flex justify-content-center align-items-center">
                        <img src={profile2} className="w-lg-100 w-md-60 w-80" alt="contact us"/>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-6 mb-5">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                <div className="bg-gradient-info shadow-info border-radius-lg p-3">
                                    <h3 className="text-white text-primary text-center mb-0">Contact us</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                {successMessage && <div className="alert alert-success text-white fw-bold">{successMessage}</div>}
                                <p className="pb-3">
                                    For further questions, including partnership opportunities, please use our contact form.
                                </p>
                                <form id="contact-form" onSubmit={handleSubmit} autocomplete="off">
                                    <div className="card-body p-0 my-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Full Name</label>
                                                    <input type="text" name="fullName" className="form-control" placeholder="I am ..." value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ps-md-2">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Email</label>
                                                    <input type="email" name="email" className="form-control" placeholder="hello@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 mt-md-0 mt-4">
                                            <div className="input-group input-group-static mb-4">
                                                <label>Message</label>
                                                <textarea name="message" className="form-control" id="message" rows="6"
                                                    placeholder="I would like to ..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn bg-gradient-info mt-3 mb-0">Send
                                                    Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;