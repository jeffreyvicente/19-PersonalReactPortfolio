import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        name: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        if (!formData.name) {
            newErrors.name = 'Name is required.';
            isValid = false;
        } else {
            newErrors.name = '';
        }

        if (!formData.message) {
            newErrors.message = 'Message is required.';
            isValid = false;
        } else {
            newErrors.message = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Perform form submission or data processing here
            console.log('Form is valid. Submitting...');
        } else {
            console.log('Form validation failed.');
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-center p-5">
                    <p>
                        {/* Your introduction text */}
                    </p>
                </div>
            </div>

            <form className="mx-5" onSubmit={handleSubmit}>
                <div className="form-group p-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>

                <div className="form-group p-2">
                    <label htmlFor="usr">First and Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="usr"
                        name="name"
                        placeholder="Enter first and last name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="form-group p-2">
                    <label htmlFor="comment">Message</label>
                    <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        name="message"
                        placeholder="Enter message"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>
                <div className="submit-button p-2">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
