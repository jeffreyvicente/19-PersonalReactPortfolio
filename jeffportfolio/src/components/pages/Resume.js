import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import jeffResume from '../../assets/docs/jeffresume.pdf'


import { faSquareJs, faCss3Alt, faHtml5,faReact, faNode,faJava } from '@fortawesome/free-brands-svg-icons'

export default function Resume() { 
    return (
        <div className = "resume-div p-5 align-center"> 
          
        
          
          <h2 className = 'skills-header text-center p-4'>My developer proficiencies</h2> 
          <p> I have successfully crafted dynamic and user-centric web applications. Leveraging technologies such as React, HTML5, and CSS3, I've seamlessly translated design concepts into user interfaces. 
            My proficiency in backend technologies like Node.js enables me to build robust and scalable server-side solutions. With a solid foundation in Java, I've developed versatile applications that combine functionality with sleek design. 
            My hands-on experience in database management ensures seamless data organization and retrieval. 
            Passionate about code quality, I consistently apply best practices to deliver responsive and visually appealing websites that elevate user experiences.</p>  

          <div class="row p-5">
            <div class="col text-center">
            <a>
            <FontAwesomeIcon icon={faNode} size="8x" /> 
            <p>NodeJS</p> 
            </a>
            </div>
            <div class="col text-center">
            <a>
            <FontAwesomeIcon icon={faJava} size="8x" />
            <p>Java</p> 
            </a>
            </div>
            <div class="col text-center">
            <a>
            <FontAwesomeIcon icon={faDatabase} size="8x" /> 
            <p>MongoDB</p> 
            </a>
            </div>
          </div>

          <div class="row p-5">
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faReact} size="8x" />
              <p>React</p> 
            </a>
            </div>
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faHtml5} size ="8x" />
              <p>HTML 5</p> 
            </a>
            </div>
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faCss3Alt} size="8x" /> 
              <p>CSS</p> 
            </a>
            </div>
            <div class="col text-center">
            <a>
              <FontAwesomeIcon icon={faSquareJs} size="8x" />
              <p>JavaScript</p> 
            </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh' }}>
            
            <div className='submit-button'>
              <a
                href ={jeffResume} download="Example-PDF-document" target='_blank' rel = "noreferrer">
                  <button className="btn btn-dark btn-lg">Download Resume 📝</button>
              </a>
         
            </div>
          </div>
          
          
        </div>
    );
}