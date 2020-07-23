import React, {useEffect} from 'react';
import NavBar from '../navbar/NavBar';
import { Element, Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Landing = () =>{
    useEffect(()=>{
        const toTop = document.querySelector(".Navbar-to-top");
    
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
        })
    })

    return (
        <div>
            <Element name="navbar" className="element" >
                  <NavBar />
             </Element>
            <div className="App-spacing">
                <Element name="projects" className="element" >
                    <h1>Projects</h1>
                    <h1>Projects</h1>
                    <h1>Projects</h1>
                </Element>
            </div>
            <div className="App-spacing">
                <Element name="resume" className="element" >
                    <h1>Resume</h1>
                    <h1>Resume</h1>
                    <h1>Resume</h1>
                </Element>
            </div>

            <div className="App-spacing">
                <Element name="contact" className="element" >
                    <h1>Contact</h1>
                    <h1>Contact</h1>
                    <h1>Contact</h1>
                </Element>
            </div>
            <Link activeClass="active" className="Navbar-to-top" to="navbar" spy={true} smooth={true} duration={500} >
                <div>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <div className="Navbar-to-top-text">
                    To Top
                </div>
            </Link>
        </div>
      );
}

export default Landing;

