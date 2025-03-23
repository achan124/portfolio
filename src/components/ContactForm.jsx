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
            <h2 className="text-center contact-header">Send me a Message!</h2>
            <div className='m-auto contact-form'>
                <div className="mb-5 pb-5">
                    <form ref={form} onSubmit={sendEmail} className='d-flex flex-column p-2 mt-4'>

                        <label className='pb-2 pt-2'>Name</label>
                        <input 
                            type="text" 
                            name="user_name" 
                            value={formData.user_name} 
                            onChange={handleInputChange} 
                            required 
                        />

                        <label className='pb-2 pt-2'>Email</label>
                        <input 
                            type="email" 
                            name="user_email" 
                            value={formData.user_email} 
                            onChange={handleInputChange}  
                            required />

                        <label className='pb-2 pt-2'>Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleInputChange} 
                            required ></textarea>

                        <div className='d-flex justify-content-end'>
                            <input type="submit" value="Send" className='mt-4 form-submit'/>
                        </div>
                    </form>
                    {successMessage && <div className="p-2 success-message">{successMessage}</div>}
                </div>
            </div>
        </>
    )
}