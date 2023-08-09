import React from 'react';
import headerImage from '../assets/images/headerImage2.jpg'

export default function Header() {
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage: `url(${headerImage})`,
                height: '250px',
            }}
        >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-2">Jeffrey Vicente</h1>
                        <h4 className="mb-4">Inspiring fullstack devoloper</h4>
                        <a className="btn btn-outline-light btn-med" href="#!" role="button">
                            Contact Me
                        </a>
                    </div>
                </div>
        </div>
    );
}

/*

    <div className= "p-5 text-center bg-light">
            <h1 className = "mb-3">Heading</h1>
            <h4 className = "mb-3">Subheading</h4>
            <a class="btn btn-primary" href="" role="button">Call to action</a>

        </div>

*/