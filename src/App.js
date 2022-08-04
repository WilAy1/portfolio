import logo from './logo.svg';
import './App.css';
import Home from './home';
import Experience from './experience';
import Portfolio from './portfolio';
import Contact from './contact';
import About from './about';
import { AiOutlineUser, AiOutlineHome, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp} from "react-icons/ai";
import {BsBriefcase} from "react-icons/bs";
import {MdComputer} from "react-icons/md";
import {IoMdContacts} from "react-icons/io";
function App() {
  return (
    <div className="App">
      <div className='nav left_nav'>
        <a href="#home"><AiOutlineHome /></a>
        <a href="#about"><AiOutlineUser /></a>
        <a href="#exp"><BsBriefcase /></a>
        <a href="#port"><MdComputer /></a>
        <a href="#contact"><IoMdContacts /></a>
      </div>
      <div className='nav right_nav'>
        <a className='n_tw' href="https://twitter.com/akintadeayomik3" target="_blank"><AiOutlineTwitter /></a>
        <a className='n_gi' href="https://github.com/WilAy1" target="_blank"><AiOutlineGithub /></a>
        <a className='n_ln' href="https://linkedin.com/" target="_blank"><AiOutlineLinkedin /></a>
        <a className='n_wh' href="https://wa.me/+2347052417486" target="_blank"><AiOutlineWhatsApp /></a>
      </div>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
