import React from 'react';
import headerImage from '../assets/images/headerImage2.jpg'


// Header component displaying a hero section with background image and text

export default function Header() {
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage: `url(${headerImage})`,
                height: '250px',
            }}
        >       
                {/* Centered content */}
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-2">Jeffrey Vicente</h1>
                        <h4 className="mb-4">Aspiring full stack developer</h4>
                        <a className="btn btn-outline-light btn-med" href="#contact" role="button" >
                            Contact Me
                        </a>
                    </div>
                </div>
        </div>
    );
}

