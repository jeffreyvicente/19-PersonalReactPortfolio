import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


import { faSquareJs, faCss3Alt, faHtml5,faReact, faNode,faJava } from '@fortawesome/free-brands-svg-icons'

const onButtonClick = () => {
}

export default function Resume() { 
    return (
        <div className = "resume-div p-5"> 
          <h3>Skills</h3>   

          <div class="row p-5">
            <div class="col text-center">
            <a>
            <FontAwesomeIcon icon={faNode} size="8x" /> 
            </a>
            </div>
            <div class="col text-center">
            <a>
            <FontAwesomeIcon icon={faJava} size="8x" />
            </a>
            </div>
            <div class="col text-center">
            <a>
            <FontAwesomeIcon icon={faDatabase} size="8x" /> 
            </a>
            </div>
          </div>

          <div class="row p-5">
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faReact} size="8x" />
            </a>
            </div>
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faHtml5} size ="8x" />
            </a>
            </div>
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faCss3Alt} size="8x" /> 
            </a>
            </div>
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faSquareJs} size="8x" />
            </a>
            </div>
          </div>


          
          <div className = 'submit-button'>
                <button onClick = {onButtonClick} type="submit" className="btn btn-primary">Download Resume 📝</button>
          </div>
        </div>
    );
}