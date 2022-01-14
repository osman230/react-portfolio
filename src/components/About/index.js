import React from 'react';
import Typist from 'react-typist';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function About() {
    return (
    <section className="name">
        <Typist avgTypingDelay={100}>
          <span>
            {"Hello, "}
           </span>
           <span>
            {"my name is Aisha Osman."}
          </span>
        </Typist>
    <h6 className='intro-desc'>
      I am a recent university graduate who discovered
      a love for coding during the pandemic. I decided to change career paths 
      and attend a full stack engineering bootcamp at the 
      University of Minnesota. Now, I am looking to dive head-first
      into the exciting and ever-changing world of software
      engineering. 
      <br></br>
      <br></br>
    </h6>
    <div className="resume-pdf">
    <p>
    <button> 
    <a href="https://www.dropbox.com/s/uutlkp9k1mijkcq/Resume.pdf?dl=0">DOWNLOAD MY RESUME</a>
    </button>         
    </p>
    </div>

<div className='contact-title'>
  <h1> Contact Me: </h1>

<ul className="contact-links">
<li className="mx-2">
    <a href="mailto:osman230@umn.edu">
    <AiOutlineMail style={{ fontSize: 50 }}></AiOutlineMail>
    </a>
</li>
<li className="mx-2">
    <a href="https://github.com/osman230">
    <AiFillGithub style={{ fontSize: 50 }}></AiFillGithub >
    </a>
</li>
<li className="mx-2">
    <a href="https://www.linkedin.com/in/aisha-osman-5b0415218/">
    <AiFillLinkedin style={{ fontSize: 50 }}></AiFillLinkedin>
  </a>
</li>
</ul>
</div>      
    </section>
      );
}

export default About;