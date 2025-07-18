import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('contact_service', 'contact_form', form.current, {
            publicKey: 'U_OevUkgAQgq2i7P6',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setSuccessMessage('Email sent!');
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
            },
            (error) => {
                console.log('FAILED...', error.text);
                setSuccessMessage('Failed to send email. Please try again.');
            },
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <h2 className="contact-header">Send me a Message!</h2>
            <div className='m-auto contact-form'>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='d-flex flex-column p-2 mt-4'>

                        <label className='form-label pb-2 pt-2'>Name
                            <span className="required-asterisk"> *</span>
                        </label>
                        <input 
                            type="text" 
                            name="user_name" 
                            value={formData.user_name} 
                            onChange={handleInputChange} 
                            required 
                            className="form-control mb-3"
                            placeholder="Name"
                        />

                        <label className='form-label pb-2 pt-2'>Email
                            <span className="required-asterisk"> *</span>
                        </label>

                        <div className='d-flex gap-3'>
                            <input 
                                type="email" 
                                name="user_email" 
                                value={formData.user_email} 
                                onChange={handleInputChange}  
                                required 
                                className="form-control mb-3"
                                placeholder="Email"
                            />
                            <input
                                type="email"
                                name="confirm_email"
                                value={formData.confirm_email}
                                onChange={handleInputChange}
                                required
                                className="form-control mb-3"
                                placeholder="Confirm Email"
                            />
                        </div>

                        <label className='form-label pb-2 pt-2'>Message
                            <span className="required-asterisk"> *</span>
                        </label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleInputChange} 
                            required 
                            className="form-control mb-3"
                            placeholder="Message"
                        ></textarea>

                        <div>
                            <input type="submit" value="Submit" className='mt-4 form-submit'/>
                        </div>
                    </form>
                    {successMessage && <div className="p-2 success-message">{successMessage}</div>}
                </div>
            </div>
        </>
    )
}