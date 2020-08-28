import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Footer.scss';

const Footer = () =>{
		
	return(
		<div className="FooterPA">
			<div className="Footer-container">
				<Link to="/" 
					className="Footer-name-link" 
					activeClass="Footer-name-link"
				>
				
				<div className="Footer-logo-rockycoder  d-flex align-items-center mt-5">
					<div className="Footer-logo-some" >
						Rocky
					</div>
					<div className="Footer-logo-coder">
						Coder
					</div>
				</div>
				</Link>
			</div>
			
			<div className="Footer-container">
				<div className="Footer-hr" />
			</div>
			
			<div className="Footer-container mb-3">
				<div className="Footer-logo">
					<NavLink
						className="Footer-logo-buttons"
						to={{ pathname: 
							 "https://www.linkedin.com/in/rocky-moreno-23a57a155/" 
						}}  
						target="_blank"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</NavLink>
				</div>
				<div className="Footer-logo">
					<NavLink
						className="Footer-logo-buttons"
						to={{ pathname: 
							 "https://github.com/rockycsumb" 
						}}  
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithubAlt} />
					</NavLink>
				</div>
				
			</div>
			
			<div className="Footer-container Footer-signature">
				<p><span>Site by </span> 
					
						<Link 
							className="Footer-name-link"
							activeClass="Footer-name-link"
							to="/" 
						>
							Rocky Moreno
						</Link>
				</p>
			</div>
		</div>
	)
}

export default Footer;