import React, {useEffect} from 'react';
import NavBar from './components/navbar/NavBar';
import './App.scss';
import { Element, Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


const App = () => {
useEffect(()=>{
	const toTop = document.querySelector(".to-top");

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
		  hi
	  </div>
		  <div className="App-spacing">
		  hi
	  </div>
		<div className="App-spacing">
		  <Element name="test1" className="element" >
		  	hi
		  </Element>
	  	</div>
		  <Link activeClass="active" className="to-top" to="navbar" spy={true} smooth={true} duration={500} >
		  	<FontAwesomeIcon icon={faArrowUp} />
			<small>To Top</small>
		  </Link>
			
    </div>
  );
}

export default App;
