import React from 'react';
import avatar from '../../assets/images/personalAvatar.PNG'

export default function About() { 
    return (
        <div className='aboutme p-5 m-5'>
            <div className='row mt-3 my-3'>
            <div class="col-sm-6 col-lg-4 d-flex justify-content-center align-items-center">
                    <img src={avatar} alt="Image description" style={{ width: '50%', height: 'auto' }}/>
                    
                </div>
                    <div class="col-sm-6 col-lg-8">
                    <div>
                            <h3>About Me</h3>
                            <p> 
                                Greetings! I'm a dedicated full stack developer with a passion for crafting immersive digital solutions that blend creativity and functionality.
                                I thrive on transforming complex ideas into seamless, user-centric experiences.
                            </p> 
                            <p>
                                I specialize in designing intuitive user interfaces that resonate and engage. 
                                My expertise in HTML, CSS, and JavaScript allows me to bring concepts to life while ensuring a seamless user journey. 
                                On the back end, I excel at architecting robust systems, utilizing databases and server-side technologies to create efficient and secure applications.
                            </p>
                    </div>
                </div>
              
            </div>
          
        </div>
    );
}