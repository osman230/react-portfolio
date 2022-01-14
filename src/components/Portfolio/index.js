import React, { Component } from 'react';
import data from "../Portfolio/portfolioData.json";


class Portfolio extends Component {
  render() {

    if(data){
      var projects = data.portfolio.projects.map(function(projects){
        var projectLink = projects.github; 
        return <div key={projects.title} className="project">
          <div className='project-info'>
          <div className="column">
          <div className="project-title">
          { projectLink ? <a href={projectLink}>
            <button type="button" className="project-btn">{projects.title}</button>
            </a> : null }
            <div className="project-desc">
                     <p>{projects.desc}</p>
                  </div>   
            </div>  
            </div>
            
          </div>
          </div>
      
      

      })
    }

    return (
     <>
      <section id="portfolio">
         <div className="resume-title" id="Portfolio">
            <h1>Portfolio</h1>
                {projects}
            </div>

   </section>
   </>
    );
  }
}

export default Portfolio;