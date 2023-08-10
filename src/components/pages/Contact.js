import React from 'react';


export default function Contact() { 
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-center p-5">
                <p>
                    Feel free to reach out to me if you have any inquiries, collaboration opportunities, or just want to discuss my full stack class project. 
                    I'm passionate about web development and excited to connect with fellow enthusiasts and potential employers.
                    If you have feedback, questions, or simply want to chat, I'm always eager to engage in meaningful conversations. 
                </p>
                </div>
            </div>



          <form className='mx-5 '>
            
            <div className="form-group p-2">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>


            <div className="form-group p-2">
                <label for="usr">First and Last Name</label>
                <input type="text" class="form-control" id="usr" placeholder='Enter first and last name'/>
            </div>
          

            <div className="form-group p-2" >
                <label for="comment">Message</label>
                <textarea class="form-control" rows="5" id="comment" placeholder='Enter message'></textarea>
            </div>
            <div className = 'submit-button p-2'>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            

          </form>
        </div>
    );
}