import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import '../../assets/css/Header.scss';
import ScrollAnimation from 'react-animate-on-scroll';


const Header = () =>{
	
	return(
		<div className="Header-main">
			<div className="Header-title">
				<ScrollAnimation animateIn="fadeIn">
				<div className="Header-title-names">
					<div className="Header-title-name">
						Rocky
					</div>
					<div className="Header-title-name">
						Coder
					</div>
				</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
				<div className="Header-title-description">
					FRONTEND ENGINEER
				</div>
				</ScrollAnimation>
			</div>
			<ScrollAnimation animateIn="flipInY">
			<div className="Header-badges">
				<div className="d-flex justify-content-center badge-row">
					<div className="Header-badges-items 
								text-center
								shadow"
					>
						<span className="Header-badge-icon Header-badge-mongo-color">
							<FontAwesomeIcon icon={faLeaf} />
						</span>
						<br/>
						MongoDB
					</div>
					<div className="Header-badges-items 
									text-center 
									shadow"
						>
						<span className="Header-badge-icon Header-badge-express-color">
							<FontAwesomeIcon icon={faProjectDiagram} />
						</span>
						<br/>
						Express.js
					</div>
				</div>
				
				<div className="d-flex justify-content-center">
					<div className="Header-badges-items 
								text-center
								shadow"
					>
						<span className="Header-badge-icon Header-badge-react-color">
							<FontAwesomeIcon icon={faReact} />
						</span>
						<br/>
						React
					</div>
					<div className="Header-badges-items 
									text-center
									shadow"
						>
						<span className="Header-badge-icon Header-badge-node-color">
							<FontAwesomeIcon icon={faNode} />
						</span>
						<br/>
						NodeJs
					</div>
				</div>
			</div>
			</ScrollAnimation>
		</div>
	)
}

export default Header;