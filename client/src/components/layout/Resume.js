import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import myResume from '../../assets/files/RockyMoreno_resume.pdf';
import '../../assets/css/Resume.scss';

const Resume = () =>{
	
	return(
		<div className="Resume">
			<div className="Resume-title-header">
				<div className="Resume-title-item">
					Resume
				</div>
				<div>
					<hr className="Resume-title-hr" />
				</div>
			</div>
			
			
			
			
			
			{/*
			<div className="Resume-content-container">
				<div className="Resume-content">
					<div className="Resume-content-column1">
						<ul>
							<li>MERN FullStack</li>
							<li>JS</li>
							<li>C++</li>
							<li>PHP</li>
						</ul>
					</div>
					<hr />
					
					<div className="Resume-content-column2">
						<ul>
							<li>B.S. Computer Science</li>
							<li>A.A. Natural Science</li>
							<li>Location: San Jose</li>
							<li>
								<Link
									className="btn btn-warning "
									to={myResume}
									target="_blank"	
									download
								>
									Resume
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			*/}
			
		</div>
	)
}

export default Resume;