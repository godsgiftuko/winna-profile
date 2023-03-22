import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LinkedinLogo from './assets/linkedin.svg'
import GithubLogo from './assets/github.svg'
import './App.css'


function App() {
  return (
    <div className='App'>
      <header>
        <h4>Winner</h4>
        <div className='mylinks'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
          <a href='#projects'>projects</a>

        </div>
      </header>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <div className='social'>
          <a href="https://www.linkedin.com/in/blessing-winner-88b669228/" target="_blank">
            <img src={LinkedinLogo} alt='' />
          </a>

          <a href="https://github.com/Winner070/mainprojectgroup2.git" target="_blank">
            <img src={GithubLogo} alt='' />
          </a>
        </div>
        <p>&copy; Blessing Winner</p>
      </footer>
    </div>
  )
}

export default App
