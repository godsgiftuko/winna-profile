import eth from '../assets/eth.jpg'
function Projects() {
  
    return (
      <div id="projects" >
    <h2>project</h2>
    <p>Here are all my projects</p>
    <div classname= "box-container">
      <div className="box">
      <img src= {eth} alt=""/>
      <a href="https://github.com/Winner070/mainprojectgroup2.git">github link</a>
         </div>
         
       </div>
      </div>
    )
  }
  
  export default Projects
  