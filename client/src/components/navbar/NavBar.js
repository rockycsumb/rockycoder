import React, {useEffect, useState} from 'react';
import Headroom from 'headroom.js';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () =>{
	const [toggle, setToggle] = useState(false);
	
	useEffect(()=>{
		let myElement = document.getElementById('navbar-main');
		let headroom = new Headroom(myElement);
		headroom.init();
	})

	const toggler = () =>{
		setToggle(!toggle);
		console.log("popup", toggle)
	}
	
	return (
		<div>
		
			<div className={toggle ? "Navbar-popup-menu" : "Navbar-popup-menu Navbar-popup-menu-off"} >
				<div className="Navbar-hamburger-toggler border border-white" onClick={toggler} >
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>	


			<div className="Navbar-bg headroom fixed-top" id="navbar-main">
				<div className="d-flex text-white justify-content-around align-items-center ">
					<div className="Navbar-menu-space">
						{" "}
					</div>
					<div className="Navbar-logo  d-flex align-items-center">
						<div className="Navbar-logo-some" >
							Some
						</div>
						<div className="Navbar-logo-coder">
							Coder
						</div>
					</div>
					<div className="Navbar-buttons ">
						<div className="Navbar-hamburger-toggler border border-white" onClick={toggler}>
							<FontAwesomeIcon icon={faBars} />
						</div>
								
						<div className="Navbar-links">
							<div className="d-flex flex-column justify-content-around">
								<Link 
									activeClass="active" 
									className="projects Navbar-menu-links" 
									to="projects" 
									spy={true} 
									smooth={true} 
									duration={1000} 
								>
									Projects
								</Link>
								<Link 
									activeClass="active" 
									className="resume Navbar-menu-links" 
									to="resume" 
									spy={true} 
									smooth={true} 
									duration={1000} 
								>
									Resume
								</Link>
								<Link 
									activeClass="active" 
									className="contact Navbar-menu-links" 
									to="contact" 
									spy={true} 
									smooth={true} 
									duration={1000} 
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NavBar;