import React, {useEffect} from 'react';
import Headroom from 'headroom.js';
import '../../assets/css/Navbar.css';

const NavBar = () =>{
	
	useEffect(()=>{
		let myElement = document.getElementById('navbar-main');
		let headroom = new Headroom(myElement);
		headroom.init();
	})
	
	
	
	return (
		<div>
			<div className="bg-dark p-3 headroom fixed-top" id="navbar-main">
				<div className="d-flex text-white">
					<div>
						Logo
					</div>
					<div className="d-flex">
						<div>Links</div>
						<div>Links</div>
						<div>Links</div>
						<div>Links</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NavBar;