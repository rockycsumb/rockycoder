import React, {Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import {projectinfo} from '../../assets/projectinfo.js';
import '../../assets/css/Projects.scss';

const Projects = () =>{
	
	console.log("json ", projectinfo);
	
// 	projectLiveLink  https://www.curlyadmin.com/demo/curlyadmin
// projectTitle  CurlyAdmin.com
// projectDescription  A virtual admin system
// thumb1  curlyadmin_frontpage.png
// thumb2  curlyadmin_dashboard.png
// projectBackCardTitle  CurlyAdmin.com
// demoUrl1  https://www.curlyadmin.com/demo/curlyadmin
// demoUrl2  https://www.curlyadmin.com/demo/curlyadmin/login
// techUsed  Mongo DB, Express, React, Node.js (MERN Full Stack), Authentication Dashboard, CRUD, HTML, CSS, JavaScript 
// apiUsed  Sendgrid, Emailjs, Recaptcha, Stripe
	
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
			
			{/* begin project info */}
			
			<h2>Testing Component map</h2>
			{projectinfo.map(project =>(
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
			))}
			<h2>Testing Component map</h2>
			<h2>Testing Component</h2>
			<ProjectInfo 
				projectLiveLink={"https://www.curlyadmin.com/demo/curlyadmin"}
				projectTitle={"CurlyAdmin.com"}
				projectDescription={"A virtual admin system"}
				thumb1={"curlyadmin_frontpage.png"}
				thumb2={"curlyadmin_dashboard.png"}
				projectBackCardTitle={"CurlyAdmin.com"}
				demoUrl1={"https://www.curlyadmin.com/demo/curlyadmin"}
				demoUrl2={"https://www.curlyadmin.com/demo/curlyadmin/login"}
				techUsed={"Mongo DB, Express, React, Node.js (MERN Full Stack), Authentication Dashboard, CRUD, HTML, CSS, JavaScript"}
				apiUsed={"Sendgrid, Emailjs, Recaptcha, Stripe"}
				
			/>
			<h2>Testing Component</h2>
			{/* End project info */}
			
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