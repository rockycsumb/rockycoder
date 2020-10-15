import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode, faJs, faHtml5, faGitSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import myResume from '../../assets/files/RockyMoreno_resume.pdf';
import '../../assets/css/Resume.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const Resume = () =>{
	
	return(
		<div className="Resume">
			<div className="Resume-title-header">
				<div className="Resume-title-item">
					Resume
								<Link
									className="btn btn-warning btn-sm ml-2 "
									to={myResume}
									target="_blank"	
									download
								>
									Download
								</Link>
				</div>
				<div>
					<hr className="Resume-title-hr" />
				</div>
			</div>
			<ScrollAnimation animateIn="fadeInLeft">
			<div className="Resume-container">
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-mongo-color">
							<FontAwesomeIcon icon={faLeaf} />
						</span>
						<br />
						MongoDB
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-express-color">
							<FontAwesomeIcon icon={faProjectDiagram} />
						</span>
						<br/>
						ExpressJS
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-react-color">
							<FontAwesomeIcon icon={faReact} />
						</span>
						<br/>
						ReactJS
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FontAwesomeIcon icon={faNode} />
						</span>
						<br/>
						NodeJS
					</div>
				</div>
			</div>
			
			<div className="Resume-container">
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FontAwesomeIcon icon={faJs} />
						</span>
						<br/>
						JavaScript
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FontAwesomeIcon icon={faHtml5} />
						</span>
						<br/>
						HTML
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FontAwesomeIcon icon={faGitSquare} />
						</span>
						<br/>
						Git
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FontAwesomeIcon icon={faCss3Alt} />
						</span>
						<br/>
						CSS
					</div>
				</div>
			</div>
			</ScrollAnimation>
			
			<div className="Resume-title-header">
				<div className="Resume-title-item">
					Education Experience
				</div>
				<div>
					<hr className="Resume-title-hr" />
				</div>
			</div>
			
			
			<ScrollAnimation animateIn="fadeInRight">
			<div className="Resume-container">
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						B.S. Computer Science
					</div>
					<div className="Resume-card text-center shadow-sm">
						A.A. Natural Science
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						Location: San Jose, California
					</div>
					<div className="Resume-card text-center shadow-sm">
						Resume
						
						<Link
									className="btn btn-warning btn-sm"
									to={myResume}
									target="_blank"	
									download
								>
									Download
								</Link>
					</div>
				</div>
			</div>
			</ScrollAnimation>
		</div>
	)
}

export default Resume;