import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/Projects.scss';

const Projects = () =>{
	
	return(
		<div className="d-flex flex-column">
			<div className="Projects-title">
				<div className="Projects-title-item1">
					Projects
				</div>
				<div className="Projects-title-item2">
					<hr />
				</div>
			</div>
			<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					CurlyAdmin.com
				</div>
				<div className="Projects-container-item-description">
					A virtual admin system
				</div>
			</div>
			
			<div className="Projects-thumbnails">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require("../../assets/images/curlyadmin_frontpage.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>CurlyAdmin.com</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://www.curlyadmin.com" }} 
									role="button" 
									target="_blank"
								>
									Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require("../../assets/images/curlyadmin_dashboard.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>CurlyAdmin.com</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://www.curlyadmin.com" }}  
									role="button" 
									target="_blank"
								>
									Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="Projects-tech">
				<div className="text-left">
					<p className="mb-0">
						<span className="font-weight-bold Projects-tech-title">Technology Used: </span>
						<span className="font-weight-light Projects-tech-info">Mongo DB, Express, React, Node.js (MERN Full Stack), Authentication Dashboard, CRUD, HTML, CSS, JavaScript 
						</span>
					</p>
					<p>
						<span className="font-weight-bold Projects-tech-title">API's: </span>
						<span className="font-weight-light Projects-tech-info">Sendgrid, Emailjs, Recaptcha, Postman
						</span>
					</p>
				</div>
			</div>
			</Fragment>
			
			<hr className="Projects-divider" />
			
			<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					RockyCoder.com
				</div>
				<div className="Projects-container-item-description">
					My portfolio website
				</div>
			</div>
			
			<div className="Projects-thumbnails">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require("../../assets/images/rockyportfolio_frontpage.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>RockyCoder.com</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://rockycoder.herokuapp.com/" }} 
									role="button" 
									target="_blank"
								>
									Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require("../../assets/images/rockyportfolio_contact.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>RockyCoder.com</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://rockycoder.herokuapp.com/" }} 
									role="button" 
									target="_blank"
								>
									Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="Projects-tech">
				<div className="text-left">
					<p className="mb-0">
						<span className="font-weight-bold Projects-tech-title">Technology Used: </span>
						<span className="font-weight-light Projects-tech-info">React, Node.js, HTML, CSS, JavaScript 
						</span>
					</p>
					<p>
						<span className="font-weight-bold Projects-tech-title">API's: </span>
						<span className="font-weight-light Projects-tech-info">Emailjs
						</span>
					</p>
				</div>
			</div>
			</Fragment>
		</div>
	)
}

export default Projects;