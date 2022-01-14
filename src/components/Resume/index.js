import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { DiJavascript1} from 'react-icons/di';
import { DiJqueryLogo } from 'react-icons/di';
import { SiJson } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { SiMysql } from 'react-icons/si';
import { SiSequelize } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiPwa } from 'react-icons/si';
import { AiOutlineLine } from 'react-icons/ai';
import { AiOutlineCaretRight } from 'react-icons/ai';


function Resume() {
    return (
      <div className='Resume' id="Resume">
      
        <div className="resume-title">
            <h1><span>Education</span></h1>
        </div>    
         <div className="education">
            <span>University of Minnesota</span>
        </div>
            <div className='education-degree'>
            <span>Bachelors of Arts in Psychology - December 2020</span>
            </div>
            <br></br>
            <div className='education-degree'>
            <span>Full-Stack Coding Bootcamp - February 2022</span>
            </div>
         
      
      <div className="resume-title">
            <h1><span>Work</span></h1>
      </div>
        <div className="job">
            Memorial Blood Centers
        </div>
         <div className="job-desc">
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
         Received Blood Donations.
           <br></br>
           <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
           Obtained and Tested Blood Samples from Donors for Illnesses.
           <br></br>
           <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
           Separated Blood Components for Hospitals.
           <br></br>
           <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
           Coordinated with Multipe Different Departments to Ensure Blood Donations
           were Safe for Transfusion.
           <br></br>
            2021 - Current
         </div>    
         <div className="job">
            Minnesota Department of Health (Rose Industries Contractor)
         </div>
         <div className="job-desc">
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
            Provided Accurate Information to Cases that tested Positive for COVID-19
            and collected contact tracing information.
            <br></br>
            2020
         </div>
         <div className="job">
            University of Minnesota
         </div>
         <div className="job-desc">
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
            Coordinated Communication between the University Police and Parking Services.
            <br></br>
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>   
             Programmed Key Cards for Parking Contracts.
            <br></br>
            2016-2020
         </div>
         <div className="job">
            Minnesota Department of Motor Vehicle Services
         </div>
         <div className="job-desc">
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
            Resolved Motor Vehicle and License Complications.
         <br></br>
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>   
            Evaluated Legal Documents.
            <br></br>
            2016-2017
         </div>
         <div className="job">
            Payless ShoeSource
         </div>
         <div className="job-desc">
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
         Provided Excellent Customer Service.
         <br></br>
         <AiOutlineCaretRight style={{ fontSize: 15 }}></AiOutlineCaretRight>
         Organized Inventory.
            <br></br>
            2015-2016
         </div>

      <div className="resume-title">
            <h1><span>Skills</span></h1>
      </div>
      <div className='skills'>
   
    <AiFillHtml5 style={{ fontSize: 50 }}></AiFillHtml5>
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
    <AiFillGithub style={{ fontSize: 50 }}></AiFillGithub>
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
    <DiJavascript1 style={{ fontSize: 50 }}></DiJavascript1>
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
    <DiJqueryLogo style={{ fontSize: 50 }}></DiJqueryLogo>
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
    <SiSequelize style={{ fontSize: 50 }}></SiSequelize>  
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>    
    <SiMysql style={{ fontSize: 50 }}></SiMysql>
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
    <SiJson style={{ fontSize: 50 }}></SiJson>
    <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
    <GrNode style={{ fontSize: 50 }}></GrNode>

         <br></br>
         <br></br>
   <SiMongodb style={{ fontSize: 50 }}></SiMongodb>
   <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
   <SiJest style={{ fontSize: 50 }}></SiJest>
   <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
   <FaReact style={{ fontSize: 50 }}></FaReact>
   <AiOutlineLine style={{ fontSize: 50 }}></AiOutlineLine>
   <SiPwa style={{ fontSize: 50 }}></SiPwa>
      </div>
   </div> 
    );
  }
  
  export default Resume