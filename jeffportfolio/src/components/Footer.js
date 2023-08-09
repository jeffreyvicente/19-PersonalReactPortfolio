import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareTwitter, faSquareGithub, faLinkedin,faEnvelope } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){


    return(
        
        <footer className="bg-dark text-white text-center py-3">
            <div>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.twitter.com/jeffreyvicente"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{color: "#ffffff",}} />
                </a>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/jeffrey-vicente/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#ffffff",}} />
                </a>
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/jeffreyvicente"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faSquareGithub} size="xl" style={{color: "#ffffff",}} />
                </a>
            </div>
            <div>
                <p>&copy; 2023 Jeffrey Vicente. All rights reserved.</p>
            </div>
        </footer>
    );




}