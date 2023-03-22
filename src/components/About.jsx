import winner from '../assets/winner.jpg'

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    <div className="about-container">

      <div className="bio">
        <h3>Who am I ?</h3>
        <p>As a passionate blockchain developer, I have gained extensive experience in programming languages such as Solidity and JavaScript, and have successfully created NFTs and ERC20 tokens. My personal interest in promoting female empowerment further motivates me to use my skills to make a positive impact. I am excited to collaborate with you and create innovative solutions using blockchain technology. Together, we can make magic happen!</p>
      </div>
      <div className="profile-image">
        <img src={winner} alt="" />

      </div>
    </div>
    </div>
    )
  }
  
  export default About
  
  