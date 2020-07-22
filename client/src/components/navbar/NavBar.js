import React, {useEffect} from 'react';
import Headroom from 'headroom.js';
import { Link } from 'react-scroll';

const NavBar = () =>{
	
	useEffect(()=>{
		let myElement = document.getElementById('navbar-main');
		let headroom = new Headroom(myElement);
		headroom.init();
	})
	
	
	
	return (
		<div>
			<div className="Navbar-bg p-3 headroom fixed-top" id="navbar-main">
				<div className="d-flex text-white justify-content-center border border-warning">
					<div className="Navbar-logo border border-white mr-5">
						&lt;Rocky/Coder&gt;
					</div>
					<div className="Navbar-buttons border border-white">
						<div className="d-flex justify-content-around">
							<Link 
								activeClass="active" 
								className="test1 Navbar-menu-links" 
								to="test1" 
								spy={true} 
								smooth={true} 
								duration={2000} 
							>
								Test 1
							</Link>
							<div className="Navbar-menu-links">Projects</div>
							<div className="Navbar-menu-links">About Me</div>
							<div className="Navbar-menu-links">Contact</div>
							<div className="Navbar-menu-links">Resume</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NavBar;