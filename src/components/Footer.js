import React from 'react';

//Imports FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){

    return(
        // Footer section with dark background, white text, centered content, padding, and margin
        <footer className="footer bg-dark text-white text-center py-3 mt-5">
            <div>
                {/* Twitter link */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.twitter.com/jeffreyvicente"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{color: "#ffffff",}} />
                </a>
                {/* LinkedIn link */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/jeffrey-vicente/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#ffffff",}} />
                </a>
                {/* GitHub link */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/jeffreyvicente"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                    <FontAwesomeIcon icon={faSquareGithub} size="xl" style={{color: "#ffffff",}} />
                </a>
            </div>
            {/* Copyright information */}
            <div>
                <p>&copy; 2023 Jeffrey Vicente. All rights reserved.</p>
            </div>
        </footer>
    );

}