import React, {Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import {projectinfo} from '../../assets/projectinfo.js';
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
<<<<<<< HEAD
			<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					<NavLink 
						className="Projects-item-name-link"
						to={{ pathname: "https://www.curlyadmin.com/demo/curlyadmin" }} 
						target="_blank"
								>
						CurlyAdmin.com
					</NavLink>
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
									to={{ pathname: "https://www.curlyadmin.com/demo/curlyadmin" }} 
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
									to={{ pathname: "https://www.curlyadmin.com/demo/curlyadmin/login" }}  
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
						<span className="font-weight-light Projects-tech-info">Sendgrid, Emailjs, Recaptcha, Stripe
						</span>
					</p>
				</div>
			</div>
			</Fragment>
			
			{/*** NEW  PROJECT ***/}
			<hr className="Projects-divider" />
			
			<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					<NavLink 
						className="Projects-item-name-link"
						to={{ pathname: "https://covid-tracker-4a671.web.app/" }} 
						target="_blank"
								>
					CovidTracker
					</NavLink>
				</div>
				<div className="Projects-container-item-description">
					CovidTracker - Web app for covid tracking
				</div>
			</div>
			
			<div className="Projects-thumbnails">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require("../../assets/images/covidthumb1.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>CovidTracker</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://covid-tracker-4a671.web.app/" }} 
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
									src={require("../../assets/images/covidthumb2.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>CovidTracker</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://covid-tracker-4a671.web.app/" }} 
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
						<span className="font-weight-light Projects-tech-info">React, Node.js, HTML, CSS, JavaScript, Firebase, leaflet Map, chartjs
						</span>
					</p>
					<p>
						<span className="font-weight-bold Projects-tech-title">API's: </span>
						<span className="font-weight-light Projects-tech-info">disease.sh
						</span>
					</p>
				</div>
			</div>
			</Fragment>
			<hr className="Projects-divider" />
			
			<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					<NavLink 
						className="Projects-item-name-link"
						to={{ pathname: "https://coderchat-c0a8c.web.app/" }} 
						target="_blank"
								>
					CoderChat
					</NavLink>
				</div>
				<div className="Projects-container-item-description">
					CoderChat - WhatsApp replica for coders
				</div>
			</div>
			
			<div className="Projects-thumbnails">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require("../../assets/images/coderchat_login.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>CoderChat</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://coderchat-c0a8c.web.app/" }} 
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
									src={require("../../assets/images/coderchat_chat.png")} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>CoderChat</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: "https://coderchat-c0a8c.web.app/" }} 
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
						<span className="font-weight-light Projects-tech-info">React, Node.js, HTML, CSS, JavaScript, Firebase
						</span>
					</p>
					<p>
						<span className="font-weight-bold Projects-tech-title">API's: </span>
						<span className="font-weight-light Projects-tech-info">Firebase Google authentication
						</span>
					</p>
				</div>
			</div>
			</Fragment>
			
			<hr className="Projects-divider" />
			
			<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					<NavLink 
						className="Projects-item-name-link"
						to={{ pathname: "https://www.rockycoder.com" }} 
						target="_blank"
								>
					RockyCoder.com
					</NavLink>
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
									to={{ pathname: "https://www.rockycoder.com/" }} 
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
									to={{ pathname: "https://www.rockycoder.com/" }} 
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
=======
>>>>>>> rm_project_component
			
			{/* begin project info */}
			{projectinfo.map((project, index) =>(
				<Fragment>
					<ProjectInfo 
						projectLiveLink={project.projectLiveLink}
						projectTitle={project.projectTitle}
						projectDescription={project.projectDescription}
						thumb1={project.thumb1}
						thumb2={project.thumb2}
						projectBackCardTitle={project.projectBackCardTitle}
						demoUrl1={project.demoUrl1}
						demoUrl2={project.demoUrl2}
						techUsed={project.techUsed}
						apiUsed={project.apiUsed}

					/>
					
					{console.log("from map ", index)}
					
				
					{index !== projectinfo.length - 1 ? (
						<hr className="Projects-divider" />
					): (
					 ""
					)}
	
				</Fragment>
			))}
					
		</div>
	)
}

export default Projects;